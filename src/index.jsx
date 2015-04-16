import React from "react"
import App   from "./view/App.jsx"
import insertCss from "insert-css"
import FluxComponent from "flummox/component"
import flux from "./flux"

var container = document.querySelector("#container")
React.render( 
    <FluxComponent flux={flux}>
      <App />
    </FluxComponent>,
  container
)

insertCss(require("../styl/main.styl"))
