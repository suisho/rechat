import React from "react"
import InputField from "./InputField.jsx"
import SelectField from "./SelectField.jsx"

export default class extends React.Component{
  constructor(){
    super()
    this.submit = this.submit.bind(this)
  }
  submit(value){
    this.props.onSubmit(this.getName(), value)
  }
  getAsk(){
    return this.props.ask || {}
  }
  getName(){
    return this.getAsk().name
  }
  fieldElement(ask){
    const {name, type} = ask
    switch(type){
      case "input":
        const {placeholder} = ask
        return <InputField name={name} placeholder={placeholder} onSubmit={this.submit}/>
      case "select":
        const {options} = ask
        return <SelectField name={name} options={options} onSubmit={this.submit}/>
    }
  }
  render(){
    const {ask} = this.props
    var field = this.fieldElement(ask)
    return (
      <form className="input-field" onSubmit={this.submit}>
        {field}
      </form>
    )
  }
}

