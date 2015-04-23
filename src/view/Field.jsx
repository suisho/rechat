import React from "react"
import InputField from "./fields/InputField.jsx"
import SelectField from "./fields/SelectField.jsx"

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
    const {type} = ask || ""
    switch(type){
      case "input":
        const {placeholder} = ask
        return <InputField placeholder={placeholder} onSubmit={this.submit}/>
      case "select":
        const {options} = ask
        return <SelectField options={options} onSubmit={this.submit}/>
    }
    return <div>ありがとうございました</div>
  }
  render(){
    const { ask } = this.props
    var field = this.fieldElement(ask)
    var name = ask ? ask.name : undefined
    return <div className="input-field" key={name}>
      {field}
    </div>
  }
}

