/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import useAxios from "../../api/useAxios";
import { Carousal } from "../../components/Carousel";
import { Categories } from "../../components/Categories";
import { BANNERS, CATEGORIES } from "../../constants/endpoints";

const Home = () => {
  const {
    response: bannerData,
    loading: bannerDataLoader,
    fetchData: fetchBannerData,
  } = useAxios();

  const {
    response: categoriesData,
    loading: categoriesDataLoader,
    fetchData: fetchCategories,
  } = useAxios();

  const getBanners = () => {
    fetchBannerData({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_BASE_URL}${BANNERS}`,
      headers: {
        accept: "*/*",
      },
    });
  };

  const getCategories = () => {
    fetchCategories({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_BASE_URL}${CATEGORIES}`,
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
