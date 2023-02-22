import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
// import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
    <AppBar position="static" color='background' elevation={0}>
      <Toolbar>
        <Typography variant="h2" color='white' component="div" sx={{ flexGrow: 1 }}>
          SPNDR
        </Typography>
        <Button variant="text" color='blanco'>
          <SettingsIcon/>
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
  );
}

export default Header