import * as React from "react";
// import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

export default function FadeMenu() {
  const navigate = useNavigate();
  const { user, setuser } = React.useContext(DataContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOut = () => {
    setuser({});
    localStorage.clear();
    handleClose();
    navigate("/");
  };
  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        // sx={{ mr: 2 }}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      {/* <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button> */}
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Link to={"/"}>
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to={"/login"}>
          <MenuItem onClick={handleClose}>Login</MenuItem>
        </Link>
        <Link to={"/dashboard"}>
          <MenuItem onClick={handleClose}>Dashboard</MenuItem>
        </Link>

        <MenuItem onClick={() => handleLogOut()}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
