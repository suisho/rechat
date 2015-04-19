import React   from "react"
import Message from "./Message.jsx"

export default class extends React.Component{
  render(){
    var msgObjs = this.props.messages || []
    var messages = msgObjs.map((msg, i) => {
      return <Message message={msg.message} key={i} />
    })
    return (
      <div className="chat-area">
        {messages}
      </div>
    )
  }
}
