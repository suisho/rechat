import React   from "react"
import Message from "./Message.jsx"

// TODO: scroll controller
export default class extends React.Component{
  getNode(){
    return React.findDOMNode(this)
  }
  scrollToBottom(){
    var node = this.getNode()
    // next frame
    setTimeout(() =>{
      node.scrollTop = node.scrollHeight
    }, 0)
  }
  updateShouldScrollBottom(){
    var node = this.getNode()
    this.shouldScrollBottom = node.scrollTop + node.offsetHeight === node.scrollHeight
  }
  componentWillUpdate() {
    this.updateShouldScrollBottom()
  }
  componentDidMount(){
    console.log("did mount", this.getNode().scrollTop, this.getNode().scrollHeight)
    this.scrollToBottom()
  }
  componentDidUpdate(){
    console.log("did update")

    if(this.shouldScrollBottom){
      this.scrollToBottom()
    }
  }
  render(){
    var msgObjs = this.props.messages || []
    var messages = msgObjs.map((msg, i) => {
      return <Message message={msg.message} key={i} type={msg.type}/>
    })
    return (
      <div className="chat-area">
        {messages}
      </div>
    )
  }
}
