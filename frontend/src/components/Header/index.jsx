import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import InputAdornment from "@mui/material/InputAdornment";
import { Input, TextField, Stack, useScrollTrigger } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PropTypes from "prop-types";

const menuId = "primary-search-account-menu";
const mobileMenuId = "primary-search-account-menu-mobile";

const SearchContainer = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  paddingRight: theme.spacing(1.5),
}));

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      //   anchorOrigin={{
      //     vertical: "top",
      //     horizontal: "right",
      //   }}
      id={mobileMenuId}
      keepMounted
      //   transformOrigin={{
      //     vertical: "top",
      //     horizontal: "right",
      //   }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box component={"nav"} sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Button
            onClick={() => console.log("goto home")}
            variant="text"
            sx={{
              color: "white",
              textTransform: "none",
              borderRadius: 4,
            }}
            startIcon={<StorefrontIcon />}
          >
            <Typography variant="h6" noWrap>
              LooiShop
            </Typography>
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction={"row"} spacing={1}>
            <SearchContainer>
              <StyledInputBase
                startAdornment={
                  <IconButton onClick={() => console.log("seacrhing")}>
                    <SearchIcon sx={{ color: "white" }} />
                  </IconButton>
                }
                placeholder="Search Products…"
                inputProps={{ "aria-label": "search" }}
              />
            </SearchContainer>
            <Stack
              direction={"row"}
              spacing={1}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <IconButton>
                <Badge badgeContent={4} color="secondary">
                  <ShoppingCartIcon sx={{ color: "white" }} />{" "}
                </Badge>
              </IconButton>

              <Button
                variant="contained"
                color="secondary"
                sx={{
                  color: "white",
                  textTransform: "none",
                  borderRadius: 5,
                  // "& .MuiButton-startIcon": {
                  //   marginRight: 0, // Adjust the right margin as needed
                  // },
                }}
                startIcon={<PersonIcon />}
              >
                Login
                {/* Profile */}
              </Button>
            </Stack>
          </Stack>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

export default Header;
