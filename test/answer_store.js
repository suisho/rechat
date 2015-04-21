import AnswerStore from '../src/stores/AnswerStore'

describe("AnswerStore", () =>{
  it("", () => {
    var inq = [{
      name: "foo"
    }]
    var store = new AnswerStore(null, inq)
    console.log(store.inquiry)
  })
})
