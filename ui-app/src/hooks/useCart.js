/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAxios from "../api/useAxios";
import { formatCartData } from "../utils/cart";

const useCart = () => {
  const [cartProductList, setCartProductList] = useState([]);
  const {
    response: cartProductsData,
    loading: cartProductsDataLoader,
    fetchData: fetchCartProducts,
  } = useAxios();

  const getCartProducts = () => {
    fetchCartProducts({
      method: "GET",
      url: "http://localhost:3000/addToCart",

      headers: {
        accept: "*/*",
      },
    });
  };

  useEffect(() => {
    getCartProducts();
  }, []);

  useEffect(() => {
    if (
      cartProductsData &&
      cartProductsData.data &&
      cartProductsData.data.length > 0
    ) {
      setCartProductList(formatCartData(cartProductsData.data));
    }
  }, [cartProductsData]);

  return {
    cartProductsData,
    cartProductList,
    cartProductsDataLoader,
    getCartProducts,
  };
};

export default useCart;
