import React from "react"
import App   from "./view/App.jsx"
import insertCss from "insert-css"
var container = document.querySelector("#container")
React.render(<App />, container)

insertCss(require("../styl/main.styl"))
