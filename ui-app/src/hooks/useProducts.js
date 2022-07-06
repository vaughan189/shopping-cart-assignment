/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAxios from "../api/useAxios";
import { PRODUCTS, CATEGORIES } from "../constants/endpoints";

const useProducts = () => {
  const [filterSelection, setFilterSelection] = useState("");
  const [productsList, setProductsList] = useState([]);
  const [filteredProductsList, setFilteredProductsList] = useState([]);

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
    if (
      productsData &&
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

  return {
    categoriesData,
    categoriesDataLoader,
    productsDataLoader,
    filterSelection,
    filteredProductsList,
    getCategoriesList,
    getProductsList,
    handleCategorySelection,
  };
};

export default useProducts;
