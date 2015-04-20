import React from "react"

export default class extends React.Component{
  render(){
    const { message, type } = this.props
    const cls = ["message", type].join(" ")
    return (
      <div className={cls}>
        {message}
      </div>
    )
  }
}
