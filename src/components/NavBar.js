import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/account">
            Account
          </Button>
          <Button color="inherit" component={RouterLink} to="/threads">
            Threads
          </Button>
          <Button color="inherit" component={RouterLink} to="/signup">
            Sign Up
          </Button>
          <Button color="inherit" component={RouterLink} to="/signin">
            Log In
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;