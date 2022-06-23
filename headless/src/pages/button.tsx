import { FC } from "react"
import Button from "@mui/material/button"
import { Card } from "@mui/material"

const ButtonComponent: FC = () => {
  return (
    <div className="container">
      <main>
        <div style={{
          display: "grid",
          height: "100vh",
          placeItems: "center"
        }}>
          <Card style={{
            width: "25rem",
            height: "10rem",
            paddingInline: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(3, auto)",
            placeItems: "center"
          }}>
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button>
          </Card>
          <Card style={{
            width: "25rem",
            height: "10rem",
            paddingInline: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(3, auto)",
            placeItems: "center"
          }}>
            <Button variant="contained">Primary</Button>
            <Button variant="contained" disabled>Disabled</Button>
            <Button variant="contained" href="#text-buttons">Link</Button>
          </Card>
          <Card style={{
            width: "25rem",
            height: "10rem",
            paddingInline: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(3, auto)",
            placeItems: "center"
          }}>
            <Button variant="outlined">Primary</Button>
            <Button variant="outlined" disabled>Disabled</Button>
            <Button variant="outlined" href="#text-buttons">Link</Button>
          </Card>
        </div>
      </main>
    </div>
  )
}
export default ButtonComponent
