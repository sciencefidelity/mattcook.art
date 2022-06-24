import { BrowserRouter } from "react-router-dom"
import { RoutesProvider } from "./routesProvider"

const App = () => {
  return (
    <BrowserRouter>
      <RoutesProvider />
    </BrowserRouter>
  )
}
export default App
