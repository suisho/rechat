import React from "react"

export default class extends React.Component{
  constructor(){
    super()
    this.submit = this.submit.bind(this)
  }
  submit(e, value){
    e.preventDefault()
    console.log(value)
    this.props.onSubmit(value)
  }
  render(){
    const {options} = this.props
    var optionsElm = options.map((val, i) => {
      var onSubmitFunc = (e) => {
        this.submit(e, val)
      }
      return <li key={i} onClick={onSubmitFunc}>
        {val}
      </li>
    })
    return (
      <ul className="input-select">
        {optionsElm}
      </ul>
    )
  }
}

