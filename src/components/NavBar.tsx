import { Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
    
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Meals IDB API
        </Typography>

       
        <Box>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
