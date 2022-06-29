export const formatCartData = (cartData) => {
  const finalCartData = [];
  cartData.forEach((element) => {
    const index = finalCartData.findIndex(
      (el) => el.productId === element.productId
    );
    if (index > -1)
      finalCartData[index].quantity++;
    else finalCartData.push(element);
  });
  return finalCartData;
};
