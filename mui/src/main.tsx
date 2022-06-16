import React from "react"
import ReactDOM from "react-dom"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "styles/globals.scss"
import CssBaseline from "@mui/material/CssBaseline"
import Index from "pages/Index"

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <Index />
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById("root")
)

// https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
