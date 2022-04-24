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

export default function GutterlessList({ item }) {
  const { edit, setedit, sign, setsign } = useContext(EditContext);
  const { data, newdata, setnewdata } = React.useContext(DataContext);
  const [change, setchange] = React.useState(newdata[item]);
  console.log(newdata[item]);

  function handleEdit(value) {
    setsign(1);
    setedit(value);
  }
  const handleDelete = (value) => {
    let list = newdata[item].filter((some) => some.name !== value.name);
    setchange(list);
    newdata[item] = list;
    setnewdata(newdata);
    console.log(newdata);
  };
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {/* {newdata[item].map((value) => (
        <ListItem
          key={value.name}
          disableGutters
          secondaryAction={
            <>
              <IconButton onClick={() => handleEdit(value)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDelete(value)}>
                <DeleteIcon />
              </IconButton>
            </>
          }
        >
          <ListItemText primary={` ${value.name}`} />
        </ListItem>
      ))} */}
    </List>
  );
}
