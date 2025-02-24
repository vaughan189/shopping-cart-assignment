/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CartItem } from "../CartItem";
import { Button, IconButton } from "@mui/material";
import { LowestPriceSection } from "../LowestPrice";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import useCart from "../../hooks/useCart";
import { getTotalPrice } from "../../utils/cart";

export const Cart = () => {
  const {
    cartProductsData,
    cartProductList,
    cartProductsDataLoader,
    addProductsToCart,
    deleteCartItem,
  } = useCart();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "Dosis",
      }}
    >
      <Box sx={{}}>
        <CartHeader />
      </Box>
      {cartProductList.length === 0 && (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "Centre",
              fontFamily: "Dosis",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                fontFamily: "Dosis",
                fontSize: 25,
                fontWeight: 600,
              }}
            >
              No items in your cart
            </Typography>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                fontFamily: "Dosis",
                fontSize: 18,
                fontWeight: 400,
              }}
            >
              Your favourite items are just a click away
            </Typography>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "centre",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              Start Shopping
            </Button>
          </Box>
        </>
      )}
      {cartProductList.length > 0 && (
        <>
          <Box sx={{ height: "60%", overflowY: "inherit" }}>
            {!cartProductsDataLoader && (
              <>
                {cartProductList.map((item) => {
                  return (
                    <Box key={item.id}>
                      <CartItem
                        cartItem={item}
                        addProductsToCart={addProductsToCart}
                        deleteCartItem={deleteCartItem}
                      />
                    </Box>
                  );
                })}
              </>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <LowestPriceSection />
            </Box>
            {cartProductList.length > 0 && (
              <Box>
                <CheckOutSection cartProductsData={cartProductsData} />
              </Box>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export const CartHeader = () => {
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

export const CheckOutSection = (props) => {
  const { cartProductsData } = props;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (
      cartProductsData &&
      cartProductsData.data &&
      cartProductsData.data.length > 0
    ) {
      setTotalPrice(getTotalPrice(cartProductsData));
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
        // marginTop: { xl: "70%", md: "70%", sm: "88%", xs: "83%" },
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
