export const formatCartData = (cartData) => {
  const finalCartData = [];
  cartData.forEach((element) => {
    const index = finalCartData.findIndex(
      (el) => el.productId === element.productId
    );
    if (index > -1) finalCartData[index].quantity++;
    else finalCartData.push(element);
  });
  return finalCartData;
};

export const getTotalPrice = (cartProductsData) => {
  return cartProductsData.data.reduce(
    (a, b) => {
      return {
        price: a.price + b.price,
      };
    },
    {
      price: 0,
    }
  );
};
