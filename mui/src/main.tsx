import React from "react"
import { createRoot } from "react-dom/client"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "styles/globals.scss"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Index from "pages/Index"

const container = document.getElementById("root")
// eslint-disable-next-line
const root = createRoot(container!)
const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Index />
    </ThemeProvider>
  </React.StrictMode>
)
