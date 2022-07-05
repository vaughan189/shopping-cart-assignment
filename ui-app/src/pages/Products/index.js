/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import { Sidebar } from "../../components/Sidebar";
import { ProductList } from "./components/ProductList";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";

const Products = () => {
  const { addProductsToCart } = useCart();
  const {
    categoriesData,
    categoriesDataLoader,
    productsDataLoader,
    filterSelection,
    filteredProductsList,
    getCategoriesList,
    getProductsList,
    handleCategorySelection,
  } = useProducts();

  useEffect(() => {
    getProductsList();
    getCategoriesList();
  }, []);

  return (
    <Typography component="div" sx={{ marginTop: "1%" }}>
      <Container maxWidth="xl">
        <Grid container direction="row" justifyContent="flex-start">
          <Typography
            component={"div"}
            sx={{
              marginTop: 2,
              marginBottom: 2,
              display: { xs: "contents", sm: "none" },
            }}
          >
            <FormControl fullWidth>
              <InputLabel htmlFor="categories-menu">Select Category</InputLabel>
              <Select
                id="categories-menu"
                sx={{ color: "#FFFFFF", backgroundColor: "#c73f6d" }}
                value={filterSelection}
                MenuProps={{}}
              >
                <MenuItem value="" onClick={() => handleCategorySelection("")}>
                  Select Category
                </MenuItem>
                {categoriesData &&
                  categoriesData.data &&
                  categoriesData.data.map((item) => {
                    return (
                      <MenuItem
                        id={item.id}
                        key={item.key}
                        value={item.id}
                        onClick={() => handleCategorySelection(item.id)}
                      >
                        {item.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </FormControl>
          </Typography>
          <Typography
            component={"div"}
            sx={{ display: { xs: "none", sm: "contents" } }}
          >
            <Grid item xs={"auto"} sm={2} md={2} xl={2}>
              {!categoriesDataLoader && (
                <Sidebar
                  categoriesData={categoriesData.data}
                  handleCategorySelection={handleCategorySelection}
                />
              )}
            </Grid>
          </Typography>
          <Grid item xs={12} sm={10} md={10} xl={10}>
            {!productsDataLoader && (
              <Grid container direction="column">
                <ProductList
                  productsData={filteredProductsList}
                  addProductsToCart={addProductsToCart}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
};

export default Products;
