import React from "react"

export default class extends React.Component{
  submit(){
    
  },
  render(){
    return (
      <div className="inputField">
        <input></input>
        <button onClick={this.submit}>送信</button>
      </div>
    )
  }
}
