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
  handleNewMessage(obj){
    const { message, type} = obj
    var msgs = this.state.messages
    msgs.push({
      message: message,
      type: type
    })
    this.setState({
      messages: msgs
    })
  }
}
