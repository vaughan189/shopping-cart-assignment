import React from "react";
import { shallow } from "enzyme";
import { CartItem } from "../../../src/components/CartItem";

describe("CartItem component", () => {
  it("should render the CartItem component correctly", () => {
    const props = {
      cartItem: {
        productId: "5b6c6a7f01a7c38429530883",
        productName: "Fresho Kiwi - Green, 3 pcs",
        imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        price: 87,
        quantity: 1,
        id: 1,
      },
      deleteCartItem: jest.fn(),
      addProductsToCart: jest.fn(),
    };
    const component = shallow(<CartItem {...props} debug />);
    expect(component).toMatchSnapshot();
  });

  it("should trigger the subtract item function on clicking the button", () => {
    const props = {
      cartItem: {
        productId: "5b6c6a7f01a7c38429530883",
        productName: "Fresho Kiwi - Green, 3 pcs",
        imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        price: 87,
        quantity: 1,
        id: 1,
      },
      deleteCartItem: jest.fn(),
      addProductsToCart: jest.fn(),
    };
    const component = shallow(<CartItem {...props} debug />);
    component.find('#subtract-Cart-Item').simulate('click');
    expect(props.deleteCartItem).toHaveBeenCalled()
  });

  it("should trigger the add item function on clicking the button", () => {
    const props = {
      cartItem: {
        productId: "5b6c6a7f01a7c38429530883",
        productName: "Fresho Kiwi - Green, 3 pcs",
        imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
        price: 87,
        quantity: 1,
        id: 1,
      },
      deleteCartItem: jest.fn(),
      addProductsToCart: jest.fn(),
    };
    const component = shallow(<CartItem {...props} debug />);
    component.find('#add-Cart-Item').simulate('click');
    expect(props.addProductsToCart).toHaveBeenCalled()
  });
});
