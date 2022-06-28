import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./index.scss";
import { Cart } from "../Cart";
import { Popover, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

const routes = [
  {
    id: 1,
    name: "Home",
    path: "/home",
  },
  {
    id: 2,
    name: "Products",
    path: "/products",
  },
];

export const Header = () => {
  let history = useHistory();

  const theme = useTheme();
  const screenIsSM = useMediaQuery(theme.breakpoints.only("sm"));
  const screenIsXS = useMediaQuery(theme.breakpoints.only("xs"));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    if (screenIsSM || screenIsXS) {
      history.push("/cart");
      return;
    } else setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const redirectToPage = (path) => {
    history.push(path);
  };

  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: "#FFFFFF", height: "10%" }}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={require("../../assets/logo.png")}
            className="Logo"
            alt="logo"
          />
          <Box
            sx={{
              display: { xs: "none", md: "flex", sm: "flex", xl: "flex" },
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
            {routes.map((page) => (
              <Button
                style={{ color: "#000000" }}
                key={page.id}
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => redirectToPage(page.path)}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex", sm: "flex", xl: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Button
              aria-describedby={id}
              variant="outlined"
              startIcon={<ShoppingCartIcon />}
              color="primary"
              // onClick={() => setOpen(true)}
              onClick={handleClick}
            >
              0 Items
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              PaperProps={{
                style: {
                  width: "30%",
                  // height: "80%",
                  padding: 0,
                  margin: 0,
                  backgroundColor: "#efefef",
                  zIndex: "inherit",
                },
              }}
            >
              <Typography component="div">
                <Cart />
              </Typography>
            </Popover>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
