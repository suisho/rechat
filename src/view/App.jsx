import React from "react"
import InputField from "./InputField.jsx"
import Chat       from "./Chat.jsx"
import FluxComponent from "flummox/component";
import connectToStores from "flummox/connect";
import Keys from "../keys"
import Flux from "../flux"


class ChatHandler extends React.Component{
  render(){
    const { ask, messages, onSubmit } = this.props
    return (
      <div>
        <h1 className="header">Hello</h1>
        <Chat messages={messages} />
        <InputField onSubmit={onSubmit} ask={ask}/>
      </div>
    )
  }
}

export default class extends React.Component{
  constructor(){
    super()
    this.onSubmit = this.onSubmit.bind(this)
    this.flux = new Flux()
  }
  onSubmit(name, value){
    this.flux.getActions(Keys.ask).answer(name, value)
  }
  render(){
    return (
      <FluxComponent flux={this.flux} connectToStores={{
        ask: store => ({
          ask: store.getNextAsk(),
          messages: store.getMessages()
        })
      }}>
        <ChatHandler onSubmit={this.onSubmit} />
      </FluxComponent>
    )
  }
}
