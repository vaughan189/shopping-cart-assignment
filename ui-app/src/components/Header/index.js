import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./index.scss";
const pages = ["Home", "Products", "Blog"];

export const Header = () => {
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "#FFFFFF", height: "10%" }}
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
              display: { xs: "none", md: "flex", sm:"flex", xl:"flex" },
              justifyContent: 'center',
              flexGrow: 1,
            }}
          >
            {pages.map((page) => (
              <Button
                style={{ color: "#000000" }}
                key={page}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex", sm:"flex", xl:"flex" },
              justifyContent: 'flex-end'
            }}
          >
            <Button
              variant="outlined"
              startIcon={<ShoppingCartIcon />}
              color="primary"
            >
              0 Items
            </Button>
          </Box>
          {/* <Button
            variant="outlined"
            startIcon={<LoginIcon />}
            color="primary"
          >
            Login
          </Button> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
