import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, MenuItem, Badge, Menu } from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import {
  Menu as MenuIcon,
  Notifications,
  AccountCircle,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCreateAd = () => {
    navigate("/createAd");
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" sx={{ backgroundColor: "#322514" }}>
        <Toolbar>
          <IconButton onClick={handleMenu} color="inherit">
            <MenuIcon id="menu-appbar" />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClick={handleClose}>
            <MenuItem onClick={handleCreateAd}>
              <IconButton color="inherit">
                <AddCircleOutlineIcon />
              </IconButton>
              <p>Criar anúncio</p>
            </MenuItem>

            <MenuItem onClick={handleLogout}>
              <IconButton color="inherit">
                <LogoutIcon />
              </IconButton>
              <p>Sair</p>
            </MenuItem>
          </Menu>
          <Typography variant="h5" noWrap>
            Anúncios
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
