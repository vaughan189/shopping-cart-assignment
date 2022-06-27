import * as React from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./index.scss";

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
              variant="outlined"
              startIcon={<ShoppingCartIcon />}
              color="primary"
            >
              0 Items
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
