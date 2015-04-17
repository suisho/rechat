import { Flummox, Store, Actions } from "flummox"
const Keys = {
  ask: "ask"
}

class Ask{
  constructor(questions){
    this.questions = questions
    this.answers = {}
  }
  answer(question, answer){
    this.answers[question] = answer
  }
  getNextAsk(){
    for(let i = 0; i < this.questions.length; i++){
      var q = this.questions[i]
      if(!this.answers[q.name]){
        return q
      }
    }
  }
  buildMessages(){
    var messages = []
    this.questions.forEach((q) => {
      messages.push({
        message: q.message
      })
      if(this.answers[q.name]){
        messages.push({
          message: this.answer
        })
      }
    })
    return messages
  }
}

let askInstance = new Ask([
  {
    name: "name",
    message: "お名前を教えて下さい",
    placeholder: "名前を入力",
    type: "input"
  }
])

class AskActions extends Actions {
  answer(content) { return content }
}

class AskStore extends Store {
  constructor(flux, ask) {
    super()
    const messageActions = flux.getActions(Keys.ask)
    this.register(messageActions.newMessage, this.handleNewMessage);
    this.ask = ask
    this.state = {
      messages: this.ask.buildMessages()
    };
  }
  getMessages(){
    return this.state.messages
  }
  getNextAsk(){
    return this.ask.getNextAsk()
  }
  handleNewMessage(content) {
    this.ask.answer()
    this.setState({
      messages: this.ask.buildMessages()
      // [id]: {
      //   content,
      //   id
      // }
    })
  }
}


class Flux extends Flummox {
  constructor() {
    super();

    this.createActions(Keys.ask, AskActions)
    this.createStore(Keys.ask, AskStore, this, askInstance)

    // this.createActions("messages", MessageActions)
    // this.createStore("messages", MessageStore, this)
  }
}

export default new Flux();
