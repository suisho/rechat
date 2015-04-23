import React from "react"

export default class extends React.Component{
  constructor(){
    super()
    this.submit = this.submit.bind(this)
  }
  getInputNode(){
    return React.findDOMNode(this.refs.input)
  }
  submit(e){
    e.preventDefault()
    const node = this.getInputNode()
    const text = node.value.trim();
    if(text.length === 0){
      return
    }
    this.props.onSubmit(text)
    this.reset()
  }
  focus(){
    this.getInputNode().focus()
  }
  componentDidMount(){
    this.focus()
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

