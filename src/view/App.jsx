import React from "react"
import InputField from "./InputField.jsx"
import Chat       from "./Chat.jsx"
import connectToStores from "flummox/connect";
import Keys from "../keys"
class ChatHandler extends React.Component{
  render(){
    const { ask, messages } = this.props
    return (
      <div>
        <Chat messages={messages} />
        <InputField onSubmit={this.props.onSubmit} name={ask.name} placeholder={ask.placeholder}/>
      </div>
    )
  }
}

ChatHandler = connectToStores(ChatHandler, {
  ask: store => ({
    ask: store.getNextAsk(),
    messages: store.getMessages()
  })
})

export default class extends React.Component{
  constructor(){
    super()
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(name, value){
    this.props.flux.getActions(Keys.ask).answer(name, value)
  }
  render(){
    return (
      <div>
        <h1>Hello</h1>
        <ChatHandler onSubmit={this.onSubmit}/>
      </div>
    )
  }
}
