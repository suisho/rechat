import React from "react"
import InputField from "./InputField.jsx"
import Chat       from "./Chat.jsx"

export default class extends React.Component{
  render(){
    return (
      <div>
        <h1>hola</h1>
        <Chat />
        <InputField />
      </div>
    )
  }
}
