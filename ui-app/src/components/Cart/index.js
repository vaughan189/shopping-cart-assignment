import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CartItem } from "../CartItem";
import { Button } from "@mui/material";
import { LowestPriceSection } from "../LowestPrice";

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
        backgroundColor: "#000000",
        color: "#FFFFFF",
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
        marginTop: "70%",
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
        }}
      >
        <Typography component="span">Proceed to Checkout</Typography>
        <Typography component="span">Rs. 187</Typography>
      </Button>
    </Box>
  );
};
