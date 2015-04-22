import { Store } from "flummox"
import Keys from "../keys"

export default class extends Store {
  constructor(flux) {
    super()
    const messageActions = flux.getActions(Keys.answer)
    this.register(messageActions.message, this.handleNewMessage);
    this.state = {
      messages: []
    }
  }
  addMessage(message, type){
    this._addMessage({
      message: message,
      type: type
    })
  }
  handleNewMessage(obj){
    this._addMessage(obj)
  }
  _addMessage(obj){
    var msgs = this.state.messages
    msgs.push(obj)
    this.setState({
      messages: msgs
    })
  }
}
