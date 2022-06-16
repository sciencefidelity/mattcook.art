import React, { FC } from "react"
import Button from "@mui/material/button"

const Index: FC = () => {
  return (
    <div className="container">
      <main>
        <Button variant="contained">Dark by default</Button>
        <p>This app is using the dark mode</p>
      </main>
    </div>
  )
}
export default Index
