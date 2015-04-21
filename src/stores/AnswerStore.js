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
  validate(name, answer){
    var q = this.inquiry.get(name)
    var validateFunc = function(){ return true }
    if(typeof q.validate === "function"){
      validateFunc = q.validate
    }
    return validateFunc(answer)
  }
  handleAnswer(obj){
    const {name, value} = obj
    const answer = value
    if(this.validate(name, answer)){
      var ans = this.state.answers
      ans[name] = answer
      // this.setState({ answers: ans })
      this.messageActions.message(answer, "answer")
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
  // getAskIndex(){
  //   var questions = this.inquiry.toArray()
  //   for(let i = 0; i < questions.length; i++){
  //     var q = questions.get(i)
  //     if(!this.answers[q.name]){
  //       return i
  //     }
  //   }
  //   return this.questions.length
  // }
  // getQuestionMessage(name){
  //   var q = this.getQuestion(name)
  //   return {
  //     message: q.message,
  //     type: "question"
  //   }
  // }
  // getAnswerMessage(name){
  //   var q = this.getQuestion(name)
  //   return {
  //     message: q.message,
  //     type: "question"
  //   }
  // }
  // buildMessages(){
  //   var messages = []
  //   var qs = this.questions.slice(0, this.askedIndex() + 1)
  //   qs.forEach((q) => {
  //     messages.push()
  //     if(this.answers[q.name]){
  //       messages.push({
  //         message: this.answers[q.name],
  //         type: "answer"
  //       })
  //     }
  //   })
  //   return messages
  // }
}