/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@mui/material";
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
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      {!bannerDataLoader && !categoriesDataLoader && (
        <>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} sm={10} md={10} xl={10}>
              <Carousal bannerData={bannerData.data} />
            </Grid>
            <Grid item xs={12} sm={10} md={10} xl={10}>
              <Categories categoriesData={categoriesData.data} />
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default Home;
