import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useContext } from "react";
import { EditContext } from "../context/EditContext";
import Button from "@mui/material/Button";

const currencies = [
  {
    value: "WebDesign",
    label: "Web Design"
  },
  {
    value: "FrontEnd",
    label: "Front-End"
  },
  {
    value: "BackEnd",
    label: "Back-End"
  }
];

export default function Add() {
  // const { edit, setedit, sign, setsign } = useContext(EditContext);
  const [currency, setCurrency] = React.useState("");
  // const [localedit,setlocaledit]=React.useState(edit)

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
      }}
      noValidate
      autoComplete="off"
    >
      {/* , width: "25ch" */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around"
        }}
      >
        <TextField
          id="standard-helperText"
          helperText="Some important text"
          variant="standard"
          label="title"
          // defaultValue={localedit.name}
        />
        <TextField
          id="standard-select-currency"
          select
          label="Skills"
          // value={localedit.category}
          // SelectProps={{
          //   native: true,
          // }}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          // defaultValue={localedit.description}
          // value={edit.description}
          variant="standard"
        />
      </Box>
      <Button variant="text">Add</Button>
    </Box>
  );
}
