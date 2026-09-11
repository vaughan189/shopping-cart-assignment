import useAxios from "../api/useAxios";
import { BANNERS, CATEGORIES } from "../constants/endpoints";

const useHome = () => {
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
  return {
    bannerData,
    bannerDataLoader,
    categoriesData,
    categoriesDataLoader,
    getBanners,
    getCategories,
  };
};

export default useHome;
