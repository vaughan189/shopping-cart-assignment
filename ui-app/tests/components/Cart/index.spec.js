import React from "react";
import { shallow } from "enzyme";
import {
  Cart,
  CheckOutSection,
  CartHeader,
} from "../../../src/components/Cart";
import { withHooks } from "jest-react-hooks-shallow";

import useCart from "../../../src/hooks/useCart";
jest.mock("../../../src/hooks/useCart");

describe("Cart component", () => {
  it("should render the Cart component correctly when api is loading", () => {
    useCart.mockImplementation(() => {
      return {
        cartProductsData: [],
        cartProductList: [],
        cartProductsDataLoader: true,
        addProductsToCart: jest.fn(),
        deleteCartItem: jest.fn(),
      };
    });
    const component = shallow(<Cart debug />);
    expect(component).toMatchSnapshot();
  });

  it("should render the Cart component correctly when api returns data", () => {
    useCart.mockImplementation(() => {
      return {
        cartProductsData: [
          {
            productId: "5b6c6a7f01a7c38429530883",
            productName: "Fresho Kiwi - Green, 3 pcs",
            imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
            price: 87,
            quantity: 1,
            id: 1,
          },
          {
            productId: "5b6c6a7f01a7c38429530883",
            productName: "Fresho Kiwi - Green, 3 pcs",
            imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
            price: 87,
            quantity: 1,
            id: 1,
          },
          {
            productId: "5b6c6aeb01a7c38429530884",
            productName: "Apple - Washington, Regular, 4 pcs",
            imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
            price: 187,
            quantity: 1,
            id: 2,
          },
        ],
        cartProductList: [
          {
            productId: "5b6c6a7f01a7c38429530883",
            productName: "Fresho Kiwi - Green, 3 pcs",
            imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
            price: 87,
            quantity: 1,
            id: 1,
          },
          {
            productId: "5b6c6aeb01a7c38429530884",
            productName: "Apple - Washington, Regular, 4 pcs",
            imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
            price: 187,
            quantity: 2,
            id: 2,
          },
        ],
        cartProductsDataLoader: false,
        addProductsToCart: jest.fn(),
        deleteCartItem: jest.fn(),
      };
    });
    const component = shallow(<Cart debug />);
    expect(component).toMatchSnapshot();
  });

  it("should render the Cart component correctly when api returns empty array", () => {
    useCart.mockImplementation(() => {
      return {
        cartProductsData: [],
        cartProductList: [],
        cartProductsDataLoader: false,
        addProductsToCart: jest.fn(),
        deleteCartItem: jest.fn(),
      };
    });
    const component = shallow(<Cart debug />);
    expect(component).toMatchSnapshot();
  });

  it("should render the checkout section correctly", () => {
    jest.spyOn(React, "useEffect").mockImplementation((f) => f());
    const cartProductsData = {
      data: [
        {
          productId: "5b6c6a7f01a7c38429530883",
          productName: "Fresho Kiwi - Green, 3 pcs",
          imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
          price: 87,
          quantity: 1,
          id: 1,
        },
        {
          productId: "5b6c6a7f01a7c38429530883",
          productName: "Fresho Kiwi - Green, 3 pcs",
          imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
          price: 87,
          quantity: 1,
          id: 1,
        },
      ],
    };
    withHooks(() => {
      const component = shallow(
        <CheckOutSection cartProductsData={cartProductsData} debug />
      );
      expect(component).toMatchSnapshot();
    });
  });

  it("should render the Cart Header component correctly", () => {
    const component = shallow(<CartHeader debug />);
    expect(component).toMatchSnapshot();
  });
});
