import React from "react"

export default class extends React.Component{
  render(){
    const { message } = this.props
    return (
      <div className="message">
        {message}
      </div>
    )
  }
}
