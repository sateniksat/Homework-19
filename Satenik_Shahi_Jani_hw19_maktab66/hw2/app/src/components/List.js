import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import { DataContext } from "../context/DataContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { EditContext } from "../context/EditContext";

// filterlist
export default function GutterlessList({ category }) {
  const { edit, setedit, setsign } = useContext(EditContext);
  const { data, newdata, setnewdata } = React.useContext(DataContext);
  // const [change, setchange] = React.useState(newdata[item]);
  const [list, setlist] = React.useState([]);
  // console.log(newdata[item]);
  //   setTimeout(() => {
  //   }, 1000);

  /////-------------------should be uncomented after  App render

  // React.useEffect(() => {
  //   console.log(newdata);
  //   const finded = newdata.filter((item) => item.category === category);
  //   setlist(finded);
  //   console.log(finded);
  // }, []);

  // React.useEffect(() => {
  //   console.log(newdata);
  //   const finded1 = newdata.filter((item) => item !== undefined);

  //   const finded = finded1.filter((item) => item.category === category);
  //   setlist(finded);
  //   console.log(finded);
  // }, [newdata]);

  /////-------------------should be uncomented----------end

  function handleEdit(value) {
    setsign(1);
    // console.log(sign)
    setedit(value);
    console.log(value);
  }
  function handlelist(value) {
    setsign(2);
    setedit(value);
    console.log(value);
  }
  const handleDelete = (value, index) => {
    const filteredLIST = list.filter((item) => item.id !== value.id);
    setlist(filteredLIST);

    const filteredDATA = newdata.filter((item) => item.id !== value.id);
    setnewdata(filteredDATA);
  };

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {list.map((value, index) => (
        <ListItem
          key={value.name}
          disableGutters
          id={value.id}
          secondaryAction={
            <>
              <IconButton onClick={() => handleEdit(value)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(value, index)}>
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <ListItemText
            primary={` ${value.name}`}
            onClick={() => handlelist(value)}
          />
        </ListItem>
      ))}
    </List>
  );
}
