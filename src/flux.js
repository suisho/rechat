import { Flummox, Store, Actions } from "flummox"
const Keys = {
  ask: "ask"
}

let askInstance = new Ask([
  {
    name: "name",
    message: "お名前を教えて下さい",
    placeholder: "名前を入力",
    type: "input"
  }
])

class Ask{
  constructor(questions){
    this.questions = questions
    this.answers = {}
  }
  answer(question, answer){
    this.answers[question] = answer
  }
  getCurrentAsking(){
    for(let i = 0; i < this.questions.length; i++){
      var q = this.questions[i]
      if(this.answers[])
    }
  }
  getMessages(){
    var messages = []
    this.questions.forEach((q) => {
      messages.push(q.message)
      if(this.answers[q.name]){
        messages.push(this.answer)
      }
    })
    return messages
  }
}

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
      messages: ask.getMessages()
    };
  }
  getMessages(){
    return this.state.messages
  }
  getCurrentAsking(){
    
  }
  handleNewMessage(content) {
    this.setState({
      messages: this.ask.getMessages()
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
