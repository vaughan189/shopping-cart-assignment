/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";

import { Sidebar } from "../../components/Sidebar";
import useAxios from "../../api/useAxios";
import { ProductList } from "./components/ProductList";

export const Products = () => {
  const {
    response: productsData,
    loading: productsDataLoader,
    // error: productsDataError,
    fetchData: fetchProductsData,
  } = useAxios();

  const getProductsList = () => {
    fetchProductsData({
      method: "GET",
      url: "http://localhost:3000/products",
      headers: {
        accept: "*/*",
      },
    });
  };

  useEffect(() => {
    getProductsList();
  }, []);

  return (
    <Container maxWidth="xl">
      <Grid container direction="row" justifyContent="flex-start">
        <Box sx={{ display: { xs: "none", sm: "contents" } }}>
          <Grid item xs={2} sm={2} md={2} xl={2}>
            <Grid container direction="column">
              <Sidebar />
            </Grid>
          </Grid>
        </Box>
        <Grid item xs={10} sm={10} md={10} xl={10}>
          {!productsDataLoader && (
            <Grid container direction="column">
              <ProductList productsData={productsData.data} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};
