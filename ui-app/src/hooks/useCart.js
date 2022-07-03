/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useAxios from "../api/useAxios";
import { ADD_TO_CART } from "../constants/endpoints";
import { cartService } from "../services";
import { formatCartData } from "../utils/cart";

const useCart = () => {
  const [cartProductList, setCartProductList] = useState([]);
  const {
    response: cartProductsData,
    loading: cartProductsDataLoader,
    fetchData: fetchCartProducts,
  } = useAxios();

  const {
    response: deleteCartProductData,
    // loading: deleteCartProductLoader,
    fetchData: deleteCartProduct,
  } = useAxios();

  const {
    response: addProductData,
    // loading: addProductDataLoader,
    fetchData: addProducts,
  } = useAxios();

  const getCartProducts = () => {
    fetchCartProducts({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_BASE_URL}${ADD_TO_CART}`,

      headers: {
        accept: "*/*",
      },
    });
  };

  const deleteCartItem = (id) => {
    deleteCartProduct({
      method: "DELETE",
      url: `${process.env.REACT_APP_SERVER_BASE_URL}${ADD_TO_CART}/${id}`,
      headers: {
        accept: "*/*",
      },
    });
  };

  const addProductsToCart = (item) => {
    addProducts({
      method: "POST",
      url: `${process.env.REACT_APP_SERVER_BASE_URL}${ADD_TO_CART}`,

      headers: {
        accept: "*/*",
      },
      data: {
        productId: item.productId || item.id,
        productName: item.name || item.productName,
        imageURL: item.imageURL,
        price: item.price,
        quantity: 1,
      },
    });
  };

  useEffect(() => {
    getCartProducts();
    cartService.sendCartData("Cart has been updated");
  }, [deleteCartProductData, addProductData]);

  useEffect(() => {
    if (
      cartProductsData &&
      cartProductsData.data &&
      cartProductsData.data.length > 0
    ) {
      setCartProductList(formatCartData(cartProductsData.data));
    } else setCartProductList([]);
  }, [cartProductsData, addProductData]);

  return {
    cartProductsData,
    cartProductList,
    cartProductsDataLoader,
    getCartProducts,
    addProductsToCart,
    deleteCartItem,
  };
};

export default useCart;
