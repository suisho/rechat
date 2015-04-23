var data = require("./data.json")
export default {
  searchBreed(breed){
    return data.filter(function(b){
      return new RegExp(b).test(breed)
    })
  }
}
