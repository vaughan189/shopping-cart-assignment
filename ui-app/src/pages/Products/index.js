/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import { Sidebar } from "../../components/Sidebar";
import useAxios from "../../api/useAxios";
import { ProductList } from "./components/ProductList";
import useCart from "../../hooks/useCart";
import { CATEGORIES, PRODUCTS } from "../../constants/endpoints";

export const Products = () => {
  const [filterSelection, setFilterSelection] = useState("");
  const [productsList, setProductsList] = useState([]);
  const [filteredProductsList, setFilteredProductsList] = useState([]);

  const { addProductsToCart } = useCart();

  const {
    response: categoriesData,
    loading: categoriesDataLoader,
    fetchData: fetchCategoriesData,
  } = useAxios();

  const {
    response: productsData,
    loading: productsDataLoader,
    fetchData: fetchProductsData,
  } = useAxios();

  const getProductsList = () => {
    fetchProductsData({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_BASE_URL}${PRODUCTS}`,
      headers: {
        accept: "*/*",
      },
    });
  };

  const getCategoriesList = () => {
    fetchCategoriesData({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_BASE_URL}${CATEGORIES}`,
      headers: {
        accept: "*/*",
      },
    });
  };

  const handleCategorySelection = (id) => {
    if (filterSelection !== id) setFilterSelection(id);
    else if (filterSelection === id) setFilterSelection("");
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
    <Typography component="main" sx={{ marginTop: "1%" }}>
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
              <Select
                id="demo-simple-select"
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
