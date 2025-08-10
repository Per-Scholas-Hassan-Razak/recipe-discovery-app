import {
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";

import { Link as RouterLink } from "react-router-dom";
import { useThemeMode } from "../contexts/context";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const NavBar = () => {
  const { toggleTheme } = useThemeMode();
  const theme = useTheme();
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
        <IconButton onClick={toggleTheme} color="inherit">
          {theme.palette.mode === "light" ? (
            <Brightness4Icon />
          ) : (
            <Brightness7Icon />
          )}
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
