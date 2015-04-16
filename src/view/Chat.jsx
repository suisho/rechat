import React   from "react"
import Message from "./Message.jsx"

export default class extends React.Component{
  render(){
    return (
      <div>
        <Message message="あなたの名前は？" />
      </div>
    )
  }
}
