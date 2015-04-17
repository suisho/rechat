import React from "react"

export default class extends React.Component{
  constructor(){
    super()
    this.submit = this.submit.bind(this)
  }
  submit(e){
    e.preventDefault()
    const node = React.findDOMNode(this.refs.text)
    const text = node.value.trim();
    const name = node.name
    this.props.onSubmit(name, text)
    node.value = ""
  }
  render(){
    return (
      <form className="inputField" onSubmit={this.submit}>
        <input ref="text"
          name={this.props.name}
          placeholder={this.props.placeholder} />
        <button >送信</button>
      </form>
    )
  }
}
