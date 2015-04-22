import { Store } from "flummox"
import Immutable from "immutable"
import Keys from "../keys"

function toOrderdMap(questions){
  var q = {}
  questions.forEach((val, i) => {
    q[val.name] = questions[i]
  })
  return Immutable.OrderedMap(q)
}

export default class extends Store {
  constructor(flux, questions){
    super()
    this.flux = flux
    this.messageActions = flux.getActions(Keys.answer)
    this.register(this.messageActions.answer, this.handleAnswer);
    this.inquiry = toOrderdMap(questions)
    this.currentAskName = null
    this.state = {
      answers: {},
      nextAsk: null
    }
    this.updateNextAsk()
  }
  getAnswer(name){
    return this.state.answers[name]
  }
  sendMessage(message, type){
    return this.flux.getStore(Keys.message).handleNewMessage({
      message: message,
      type: type
    })
  }
  validate(name, answer){
    var q = this.inquiry.get(name)
    var validateFunc = function(){ return true }
    if(typeof q.validate === "function"){
      validateFunc = q.validate
    }
    return validateFunc(answer)
  }
  handleAnswer(obj){
    const {name, answer} = obj
    if(this.validate(name, answer)){
      var ans = this.state.answers
      ans[name] = answer
      // this.setState({ answers: ans })
      this.sendMessage(answer, "answer")
    }else{
      // this.messageActions.message("正しくありません", "validate-error")
      // throw new Error("validation error")
    }
  }
  updateNextAsk(){
    // this.askIndex = this.getAskIndex()
    var unAnswerdAsk = this.inquiry.find((inq) => {
      var name = inq.name
      return !this.state.answers[name]
    })
    if(this.currentAskName === unAnswerdAsk.name){
      return
    }

    this.currentAskName = unAnswerdAsk.name
    this.messageActions.message(unAnswerdAsk.message, "question")

    this.setState({
      nextAsk: unAnswerdAsk
    })
  }
}
