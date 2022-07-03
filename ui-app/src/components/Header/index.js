/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./index.scss";
import { Cart } from "../Cart";
import {
  ButtonGroup,
  Grid,
  Popover,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import useCart from "../../hooks/useCart";

import { cartService } from "../../services";

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

  const { cartProductsData, getCartProducts } = useCart();

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

  useEffect(() => {
    const subscription = cartService.getCartData().subscribe((data) => {
      console.log(data);
      if (data) {
        getCartProducts();
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AppBar
      position="sticky"
      style={{ backgroundColor: "#FFFFFF", height: "10%" }}
      sx={{ zIndex: (thm) => thm.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container direction="row">
            <Grid item xl={2} md={2} sm={2} xs={2}>
              <img
                src={require("../../assets/logo.png")}
                alt="Sabka Bazaar Logo"
              />
            </Grid>
            <Grid item xl={6} md={6} sm={6} xs="auto">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      md: "contents",
                      sm: "contents",
                      xl: "contents",
                    },
                  }}
                >
                  {routes.map((page) => (
                    <Grid key={page.id} item xl={1} md={2} sm={2} xs={1}>
                      <Button
                        style={{ color: "#000000" }}
                        sx={{ my: 2, color: "white", display: "block" }}
                        onClick={() => redirectToPage(page.path)}
                      >
                        {page.name}
                      </Button>
                    </Grid>
                  ))}
                </Box>
              </Grid>
            </Grid>
            <Grid item xl={4} md={4} sm={4} xs={screenIsXS ? 10 : 4}>
              <Grid
                container
                direction={screenIsXS ? "row" : "column"}
                justifyContent="space-around"
                alignItems="flex-end"
                sx={{ marginBottom: { sm: "6px" }, marginLeft: { xs: "8px" } }}
              >
                <Grid
                  item
                  xl={12}
                  md={12}
                  sm={12}
                  xs={screenIsXS ? 6 : 12}
                  sx={{ marginTop: { xl: "8px", md: "8px", sm: 0 } }}
                >
                  <ButtonGroup
                    size="small"
                    color="primary"
                    variant="text"
                    aria-label="text button group"
                    className="buttonGroup"
                    sx={{
                      "& .MuiButtonGroup-grouped": {
                        borderRight: "none !important",
                      },
                    }}
                  >
                    <Button
                      color="primary"
                      sx={{
                        fontSize: "1rem",
                        textTransform: "none",
                      }}
                      onClick={() => history.push("/register")}
                    >
                      SignIn
                    </Button>
                    <Button
                      color="primary"
                      sx={{
                        fontSize: "1rem",
                        textTransform: "none",
                      }}
                      onClick={() => history.push("/login")}
                    >
                      Login
                    </Button>
                  </ButtonGroup>
                </Grid>

                <Grid item xl={12} md={12} sm={12} xs={screenIsXS ? 6 : 12}>
                  <Box
                    sx={{
                      display: {
                        xs: "contents",
                        md: "contents",
                        sm: "contents",
                        xl: "contents",
                      },
                    }}
                  >
                    <Button
                      aria-describedby={id}
                      variant="outlined"
                      startIcon={<ShoppingCartIcon />}
                      color="primary"
                      onClick={handleClick}
                      className="cartButton"
                    >
                      {cartProductsData &&
                        cartProductsData.data &&
                        cartProductsData.data.length}{" "}
                      Items
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
                          height: "80%",
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
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
