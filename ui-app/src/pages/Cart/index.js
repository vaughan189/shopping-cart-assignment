import { Box } from "@mui/system";
import React from "react";
import { Cart as CartLayout } from "../../components/Cart";

const Cart = () => {
  return (
    <Box
      sx={{
        padding: 0,
        margin: 0,
        backgroundColor: "#efefef",
        zIndex: "inherit",
      }}
    >
      <CartLayout />;
    </Box>
  );
};

export default Cart;
