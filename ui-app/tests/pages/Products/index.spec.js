import React from "react";
import { shallow } from "enzyme";
import { withHooks } from "jest-react-hooks-shallow";
import useProducts from "../../../src/hooks/useProducts";
import useCart from "../../../src/hooks/useCart";

import Products from "../../../src/pages/Products";

jest.mock("../../../src/hooks/useProducts");
jest.mock("../../../src/hooks/useCart");

const handleCategorySelectionMock = jest.fn();

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Products Page", () => {
  it("should render the Products Page correctly when loader is true", () => {
    useProducts.mockImplementation(() => {
      return {
        categoriesData: [],
        categoriesDataLoader: true,
        productsData: [],
        productsDataLoader: true,
        getCategoriesList: jest.fn(),
        getProductsList: jest.fn(),
      };
    });
    useCart.mockImplementation(() => {
      return {
        addProductsToCart: jest.fn(),
      };
    });
    withHooks(() => {
      const component = shallow(<Products debug />);
      expect(component).toMatchSnapshot();
    });
  });

  it("should render the Products Page correctly when loader is false", () => {
    useProducts.mockImplementation(() => {
      return {
        categoriesData: [
          {
            name: "Beverages",
            key: "beverages",
            description:
              "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
            enabled: true,
            order: 3,
            imageUrl: "/static/images/category/beverages.png",
            id: "5b675e5e5936635728f9fc30",
          },
          {
            name: "Bakery Cakes and Dairy",
            key: "bakery-cakes-dairy",
            description:
              "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
            enabled: true,
            order: 2,
            imageUrl: "/static/images/category/bakery.png",
            id: "5b6899123d1a866534f516de",
          },
        ],
        categoriesDataLoader: false,
        filteredProductsList: [
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
        productsDataLoader: false,
        filterSelection: "5b675e5e5936635728f9fc30",
        getCategoriesList: jest.fn(),
        getProductsList: jest.fn(),
        handleCategorySelection: handleCategorySelectionMock,
      };
    });
    useCart.mockImplementation(() => {
      return {
        addProductsToCart: jest.fn(),
      };
    });
    withHooks(() => {
      const component = shallow(<Products debug />);
      expect(component).toMatchSnapshot();
    });
  });
});
