import Autocomplete from "@mui/material/Autocomplete";
import { Controller } from "react-hook-form";

export function RHFAutocomplete() {
  return (
    <Controller control={control} name={name} render={(params) => <Autocomplete />} />
  )
}

// 49.32