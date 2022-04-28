import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useContext } from "react";
import { EditContext } from "../context/EditContext";
import Button from "@mui/material/Button";
import { DataContext } from "../context/DataContext";

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

export default function Add({ handleClose }) {
  const { edit, setedit, sign, setsign } = useContext(EditContext);
  const { data, newdata, setnewdata } = React.useContext(DataContext);

  const [currency, setCurrency] = React.useState({});
  // const [localedit,setlocaledit]=React.useState(prevState=>edit)

  const handleChange = (e) => {
    // setCurrency(event.target.value);
    setCurrency({ ...currency, [e.target.name]: e.target.value });
    console.log(currency);
  };
  const handleADD = () => {
    setCurrency({ ...currency, id: newdata.length++ });
    const find = currency;
    setnewdata([...newdata, find]);
    console.log(newdata);
    handleClose();
    // setCurrency({});
    setsign(0);
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
          name={"name"}
          required
          onChange={(e) => handleChange(e)}
          // value={currency.name}
        />
        <TextField
          id="standard-select-currency"
          select
          required
          label="Skills"
          name={"category"}
          // value={currency.category}
          // SelectProps={{
          //   native: true,
          // }}
          onChange={(e) => handleChange(e)}
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
          name={"description"}
          multiline
          rows={4}
          onChange={(e) => handleChange(e)}
          // value={currency.description}
          // value={edit.description}
          variant="standard"
        />
      </Box>
      <Button
        variant="text"
        onClick={() => {
          handleADD();
        }}
      >
        Add
      </Button>
    </Box>
  );
}
