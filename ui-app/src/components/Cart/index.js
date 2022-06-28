import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CartItem } from "../CartItem";
import { Button, IconButton } from "@mui/material";
import { LowestPriceSection } from "../LowestPrice";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

export const Cart = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "Dosis",
      }}
    >
      <CartHeader />
      <CartItem />
      <LowestPriceSection />
      <CheckOutSection />
    </Box>
  );
};

const CartHeader = () => {
  return (
    <Typography
      component="div"
      sx={{
        fontSize: 18,
        height: "40px",
        paddingTop: 2,
        paddingLeft: 2,
        fontWeight: "bold",
        backgroundColor: {
          xl: "#000000",
          md: "#000000",
          sm: "#FFFFFF",
          xs: "#FFFFFF",
        },
        color: {
          xl: "#FFFFFF",
          md: "#FFFFFF",
          sm: "#000000",
          xs: "#000000",
        },
        fontFamily: "Dosis",
      }}
    >
      My Cart{" "}
      <Typography
        component="span"
        sx={{
          fontFamily: "Dosis",
          fontSize: 16,
        }}
      >
        (1 item)
      </Typography>
    </Typography>
  );
};

const CheckOutSection = () => {
  return (
    <Box
      sx={{
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "centre",
        alignItems: "centre",
        marginTop: { xl: "70%", md: "70%", sm: "88%", xs: "83%" },
        backgroundColor: "white",
        padding: 2,
      }}
    >
      <Typography
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          fontFamily: "Dosis",
          fontSize: 16,
          fontWeight: 600,
        }}
      >
        Promo code can be applied on payment page
      </Typography>
      <Button
        variant="contained"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography component="span">Proceed to Checkout</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Typography component="span">Rs. 187</Typography>
          <IconButton aria-label="delete" size="small" color="secondary">
            <ArrowForwardIosSharpIcon
              fontSize="inherit"
              sx={{ color: "#FFFFFF" }}
            />
          </IconButton>
        </Box>
      </Button>
    </Box>
  );
};
