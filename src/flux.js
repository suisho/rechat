import { Flummox, Store } from "flummox"
import Keys from "./keys"
import AnswerActions from "./actions/AnswerActions"
import AnswerStore from "./stores/AnswerStore"
import MessageStore from "./stores/MessageStore"

var inq = [
  {
    name: "age",
    message: "年齢を教えて下さい",
    type: "input",
    validate: function(value){
      return !isNaN(value)
    }
  },
  {
    name: "name",
    message: "お名前を教えて下さい",
    placeholder: "名前を入力",
    type: "input"
  },
  {
    name: "size",
    message: "大きさは？",
    type: "select",
    options: ["大型犬", "小型犬", "中型犬"]
  }
  // {
  //   name: "kana",
  //   message: "ふりがなも教えて下さい",
  //   placeholder: "ふりがなを入力",
  //   type: "input"
  // }
]
export default class extends Flummox {
  constructor() {
    super();
    this.createActions(Keys.answer, AnswerActions)
    this.createStore(Keys.message, MessageStore, this)
    this.createStore(Keys.answer, AnswerStore, this, inq)
  }
}
