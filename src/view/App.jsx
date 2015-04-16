import React from "react"
import InputField from "./InputField.jsx"
import Chat       from "./Chat.jsx"
import connectToStores from 'flummox/connect';

class ChatHandler extends React.Component{
  render(){
    console.log(this.props)
    const { messages } = this.props
    return <Chat messages={messages.messages} />
  }
}

ChatHandler = connectToStores(ChatHandler, {
  messages: store => ({
    messages: store.state
  })
})

export default class extends React.Component{
  constructor(){
    super()
  }
  onSubmit(value){
    this.props.flux.getActions("messages").newMessage(value)
  }
  render(){
    return (
      <div>
        <h1>Hello</h1>
        <ChatHandler />
        <InputField onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}
