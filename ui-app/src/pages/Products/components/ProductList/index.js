import { Alert, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { ProductItem } from "../ProductItem";

export const ProductList = (props) => {
  const { productsData, addProductsToCart } = props;

  if (productsData.length === 0)
    return (
      <Grid container direction="row" spacing={2}>
        <Grid item xl={12} md={12} sm={12} xs={12}>
          <Box
            sx={{
              marginLeft: "2%",
              marginTop: "2%",
              width: "100%",
            }}
          >
            <Alert
              severity="info"
              color="primary"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                fontFamily: "Dosis",
                fontSize: 18,
                fontWeight: 400,
                width: "100%",
              }}
            >
              No data found
            </Alert>
          </Box>
        </Grid>
      </Grid>
    );

  return (
    <Box
      component={"div"}
      sx={{
        paddingLeft: { xl: "30px", md: "40px", sm: "0px", xs: "0px" },
        paddingBottom: "4%",
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
