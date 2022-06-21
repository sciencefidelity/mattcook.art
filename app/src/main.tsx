import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { RoutesProvider } from "./routesProvider"
import "modern-normalize"
import "styles/globals.scss"

// eslint-disable-next-line
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RoutesProvider />
    </BrowserRouter>
  </StrictMode>
)
