import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { RoutesProvider } from "./routesProvider"
import "modern-normalize"
import "styles/globals.scss"

const container = document.getElementById("root")
// eslint-disable-next-line
const root = createRoot(container!)

root.render(
  <StrictMode>
    <BrowserRouter>
      <RoutesProvider />
    </BrowserRouter>
  </StrictMode>
)
