import React from "react";
import { shallow } from "enzyme";
import { ProductList } from "../../../../../src/pages/Products/components/ProductList";

describe("ProductList component", () => {
  it("should render the ProductList component correctly", () => {
    const props = {
      productsData: [
        {
          name: "Fresho Kiwi - Green, 3 pcs",
          imageURL: "/static/images/products/fruit-n-veg/kiwi-green.jpg",
          description:
            "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
          price: 87,
          stock: 50,
          category: "5b6899953d1a866534f516e2",
          sku: "fnw-kiwi-3",
          id: "5b6c6a7f01a7c38429530883",
        },
        {
          name: "Apple - Washington, Regular, 4 pcs",
          imageURL: "/static/images/products/fruit-n-veg/apple.jpg",
          description:
            "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
          price: 187,
          stock: 50,
          category: "5b6899953d1a866534f516e2",
          sku: "fnw-apple-4",
          id: "5b6c6aeb01a7c38429530884",
        },
      ],
      addProductsToCart: jest.fn(),
    };
    const component = shallow(<ProductList {...props} debug />);
    expect(component).toMatchSnapshot();
  });

  it("should render the ProductList component correctly if product list is empty", () => {
    const props = {
      productsData: [],
      addProductsToCart: jest.fn(),
    };
    const component = shallow(<ProductList {...props} debug />);
    expect(component).toMatchSnapshot();
  });
});
