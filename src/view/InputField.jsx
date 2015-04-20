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
    const name = node.name
    this.props.onSubmit(name, text)
    node.value = ""
  }
  generateInputElement(ask){
    switch(ask.type){
      case "input":
        const {name, placeholder} = ask || {}
        return <input ref="input" name={name} placeholder={placeholder} />
      case "select":
        var options = ask.options.map((val, i) => {
          return <li key={i}>
            <button onClick={this.submit}>{val}</button>
          </li>
        })
        return (
          <ul className="selective-input">
            {options}
          </ul>
        )
    }
    return <div></div>
  }
  render(){
    const {ask} = this.props
    var inputElement = this.generateInputElement(ask)
    var buttonElement = <button>送信</button>

    return (
      <form className="inputField" onSubmit={this.submit}>
        {inputElement}
        {buttonElement}
      </form>
    )
  }
}

