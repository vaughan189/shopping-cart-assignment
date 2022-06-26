/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import useAxios from "../../api/useAxios";
import { Carousal } from "../../components/Carousel";
import { Categories } from "../../components/Categories";

const Home = () => {
  const {
    response: bannerData,
    loading: bannerDataLoader,
    // error: bannerDataError,
    fetchData: fetchBannerData,
  } = useAxios();

  const {
    response: categoriesData,
    loading: categoriesDataLoader,
    // error: categoriesDataError,
    fetchData: fetchCategories,
  } = useAxios();

  const getBanners = () => {
    fetchBannerData({
      method: "GET",
      url: "http://localhost:3000/banners",
      headers: {
        accept: "*/*",
      },
    });
  };

  const getCategories = () => {
    fetchCategories({
      method: "GET",
      url: "http://localhost:3000/categories",
      headers: {
        accept: "*/*",
      },
    });
  };

  useEffect(() => {
    getBanners();
    getCategories();
  }, []);

  return (
    <Box component="main" sx={{ marginTop: "5%" }}>
      <Container maxWidth="xl">
        <Grid container direction="column" spacing={2}>
          {!bannerDataLoader && !categoriesDataLoader && (
            <>
              <Grid container direction="row">
                <Grid item xs={12} sm={12} md={12} xl={12}>
                  <Carousal bannerData={bannerData.data} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} xl={12}>
                  <Categories categoriesData={categoriesData.data} />
                </Grid>
              </Grid>
            </>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
