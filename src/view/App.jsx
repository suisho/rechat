import React from "react"
import InputField from "./InputField.jsx"
import Chat       from "./Chat.jsx"
import FluxComponent from "flummox/component"
import flux from "../flux"
export default class extends React.Component{
  render(){
    return (
      <FluxComponent flux={flux}>
        <div>
          <h1>hola</h1>
          <Chat />
          <InputField />
        </div>
      </FluxComponent>
    )
  }
}
