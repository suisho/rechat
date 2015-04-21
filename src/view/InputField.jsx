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
    this.props.onSubmit(text)
  }
  render(){
    const {name, placeholder} = this.props

    var inputElement = <input ref="input" name={name} placeholder={placeholder} />
    var buttonElement = <button>送信</button>

    return (
      <form className="inputField" onSubmit={this.submit}>
        {inputElement}
        {buttonElement}
      </form>
    )
  }
}

