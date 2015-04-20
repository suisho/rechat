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
    const {ask} = this.props
    const {name, placeholder} = ask || {}
    var inputElement = <div>終了</div>
    if(name){
      inputElement = (
        <div>
          <input ref="text"
            name={name}
            placeholder={placeholder} />
          <button>送信</button>
        </div>
      )
    }
    return (
      <form className="inputField" onSubmit={this.submit}>
        {inputElement}
      </form>
    )
  }
}

