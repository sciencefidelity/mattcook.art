import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { RoutesProvider } from "./routesProvider"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import "styles/globals.scss"

const container = document.getElementById("root")
// eslint-disable-next-line
const root = createRoot(container!)
const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

root.render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <RoutesProvider />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
