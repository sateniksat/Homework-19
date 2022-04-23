import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import LabTabs from './components/Tabs';
import FadeMenu from './components/Menu';
import SpringModal from './components/Modal';
import KeepMountedModal from './components/Modal';

// const StyledFab = styled(Fab)({
//   // position: 'absolute',
//   // zIndex: 1,
//   // top: -30,
//   // left: 0,
//   // right: 0,
//   margin: '0 auto',
// });
export default function ButtonAppBar() {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            // sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <FadeMenu/>
          <Typography centered variant="h6" component="div" sx={{ flexGrow: 1 ,textAlign:"center"}}>
           <p>my skills within</p>
           <h2>Material UI</h2>
          </Typography>
          {/* <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab> */}
          <KeepMountedModal/>
        </Toolbar>
      </AppBar>
    </Box>
    <LabTabs/>
    </>
  );
}

