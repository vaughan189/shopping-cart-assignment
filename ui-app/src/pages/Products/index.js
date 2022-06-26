/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Box, Container, Grid } from "@mui/material";

import { Sidebar } from "../../components/Sidebar";
import useAxios from "../../api/useAxios";
import { ProductList } from "./components/ProductList";

export const Products = () => {
  const [filterSelection, setFilterSelection] = useState("");
  const [productsList, setProductsList] = useState([]);
  const [filteredProductsList, setFilteredProductsList] = useState([]);

  const {
    response: categoriesData,
    loading: categoriesDataLoader,
    // error: categoriesDataError,
    fetchData: fetchCategoriesData,
  } = useAxios();

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

  const getCategoriesList = () => {
    fetchCategoriesData({
      method: "GET",
      url: "http://localhost:3000/categories",
      headers: {
        accept: "*/*",
      },
    });
  };

  useEffect(() => {
    getProductsList();
    getCategoriesList();
  }, []);

  useEffect(() => {
    if (
      !productsDataLoader &&
      Array.isArray(productsData.data) &&
      productsData.data.length > 0
    ) {
      setProductsList(productsData.data);
      setFilteredProductsList(productsData.data);
    }
  }, [productsData]);

  useEffect(() => {
    if (filterSelection)
      setFilteredProductsList(
        productsList.filter((el) => el.category === filterSelection)
      );
    else setFilteredProductsList(productsList);
  }, [filterSelection]);

  return (
    <Box component="main" sx={{ marginTop: "5%" }}>
      <Container maxWidth="xl">
        <Grid container direction="row" justifyContent="flex-start">
          <Box
            sx={{
              display: { xs: "none", sm: "contents" },
              width: { sm: "min-content", md: "inherit", xl: "inherit" },
            }}
          >
            <Grid item xs={2} sm={2} md={2} xl={2}>
              {!categoriesDataLoader && (
                <Grid container direction="column">
                  <Sidebar
                    categoriesData={categoriesData.data}
                    filterSelection={filterSelection}
                    setFilterSelection={setFilterSelection}
                  />
                </Grid>
              )}
            </Grid>
          </Box>
          <Grid item xs={10} sm={10} md={10} xl={10}>
            {!productsDataLoader && (
              <Grid container direction="column">
                <ProductList productsData={filteredProductsList} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
