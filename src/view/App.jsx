import React from "react"
import InputField from "./InputField.jsx"
import Chat       from "./Chat.jsx"
import connectToStores from "flummox/connect";

class ChatHandler extends React.Component{
  render(){
    const { ask, messages } = this.props
    return (
      <div>
        <Chat messages={messages} />
        <InputField onSubmit={this.onSubmit} />
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
    this.props.flux.getActions("messages").newMessage(name, value)
  }
  render(){
    return (
      <div>
        <h1>Hello</h1>
        <ChatHandler />
      </div>
    )
  }
}
