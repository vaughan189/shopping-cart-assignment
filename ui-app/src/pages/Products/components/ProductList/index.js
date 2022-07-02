import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ProductItem } from "../ProductItem";

export const ProductList = (props) => {
  const { productsData, addProductsToCart } = props;
  return (
    <Box
      component={"div"}
      sx={{
        paddingLeft: { xl: "30px", md: "40px", sm: "0px", xs: "0px" },
        paddingBottom: "20px",
      }}
    >
      <Grid container direction="row" spacing={2}>
        {productsData.map((item) => {
          return (
            <ProductItem
              key={item.id}
              item={item}
              addProductsToCart={addProductsToCart}
            />
          );
        })}
      </Grid>
    </Box>
  );
};
