import React from "react"
import ReactDOM from "react-dom"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "styles/globals.scss"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Index from "pages/Index"

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Index />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
