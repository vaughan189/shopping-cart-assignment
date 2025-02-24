import React from "react";
import { shallow } from "enzyme";
import { ProductItem } from "../../../../../src/pages/Products/components/ProductItem";

const handleCategorySelectionMock = jest.fn();

describe("ProductItem component", () => {
  it("should render the ProductItem component correctly", () => {
    const props = {
      item: {
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
      addProductsToCart: jest.fn(),
    };
    const component = shallow(<ProductItem {...props} debug />);
    expect(component).toMatchSnapshot();
  });

  it("should trigger the add product function on clicking the button", () => {
    const props = {
      item: {
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
      addProductsToCart: handleCategorySelectionMock,
    };
    const component = shallow(<ProductItem {...props} debug />);
    component.find("#add-products-btn").simulate("click");
    expect(handleCategorySelectionMock).toHaveBeenCalled();
  });
});
