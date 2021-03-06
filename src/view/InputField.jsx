import React from "react"

export default class extends React.Component{
  constructor(){
    super()
    this.submit = this.submit.bind(this)
  }
  submit(e){
    e.preventDefault()
    const node = React.findDOMNode(this.refs.input)
    const text = node.value.trim();
    if(text.length === 0){
      return
    }
    this.props.onSubmit(text)
    this.reset()
  }
  reset(){
    React.findDOMNode(this.refs.input).value = ""
  }
  render(){
    const {placeholder} = this.props

    var inputElement = <input ref="input" placeholder={placeholder} />
    var buttonElement = <button>送信</button>
    return (
      <form className="inputField" onSubmit={this.submit}>
        {inputElement}
        {buttonElement}
      </form>
    )
  }
}

