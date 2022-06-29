/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CartItem } from "../CartItem";
import { Button, IconButton } from "@mui/material";
import { LowestPriceSection } from "../LowestPrice";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import useCart from "../../hooks/useCart";

export const Cart = () => {
  const { cartProductsData, cartProductList, cartProductsDataLoader } =
    useCart();
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
      {!cartProductsDataLoader && (
        <>
          {cartProductList.map((item) => {
            return (
              <Box key={item.id}>
                <CartItem cartItem={item} />
              </Box>
            );
          })}
        </>
      )}
      <LowestPriceSection />
      <CheckOutSection cartProductsData={cartProductsData} />
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

const CheckOutSection = (props) => {
  const { cartProductsData } = props;
  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalPrice = () => {
    return cartProductsData.data.reduce(
      (a, b) => {
        return {
          price: a.price + b.price,
        };
      },
      {
        price: 0,
      }
    );
  };

  useEffect(() => {
    if (
      cartProductsData &&
      cartProductsData.data &&
      cartProductsData.data.length > 0
    ) {
      setTotalPrice(getTotalPrice());
    }
  }, [cartProductsData]);

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
          <Typography component="span" sx={{ textTransform: "none" }}>
            Rs.{totalPrice.price}
          </Typography>
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
