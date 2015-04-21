import { Actions } from "flummox"

export default class extends Actions {
  answer(name, value) {
    console.log("sdfdf")
    return { name: name, value: value }
  }
  message(message, type){
    return { message: message, type: type}
  }
}

