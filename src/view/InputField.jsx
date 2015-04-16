import React from "react"

export default class extends React.Component{
  constructor(){
    super()
  }
  submit(){
    var text = React.findDOMNode(this.refs.text).value.trim();
    this.props.onSubmit(text)
    React.findDOMNode(this.refs.text).value = ""
  }
  render(){
    let placeholder = this.props.placeholder || "名前を入力"
    return (
      <div className="inputField">
        <input ref="text"
          placeholder={placeholder} />
        <button onClick={this.submit.bind(this)}>送信</button>
      </div>
    )
  }
}
