import React, { FC } from "react"
import Button from "@mui/material/button"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { top100Films } from "../data/top100films"

const Index: FC = () => {
  return (
    <div className="container">
      <main>
        <Button variant="contained">Hello Button</Button>
        <hr />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
        <p>This app is using the dark mode</p>
      </main>
    </div>
  )
}
export default Index

