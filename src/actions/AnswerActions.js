import { Actions } from "flummox"

export default class extends Actions {
  answer(name, value) {
    return { name: name, answer: value }
  }
  message(message, type){
    return { message: message, type: type}
  }
}

