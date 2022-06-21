import { FC } from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import { Card } from "@mui/material"
import { top100Films } from "../data/top100films"

const AutocompleteComponent: FC = () => {
  return (
    <main>
      <div style={{
        display: "grid",
        height: "100vh",
        placeItems: "center"
      }}>
        <Card style={{
          width: "350px",
          height: "250px",
          display: "grid",
          placeItems: "center"
        }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Card>
      </div>
    </main>
  )
}
export default AutocompleteComponent

