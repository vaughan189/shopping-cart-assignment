import React from "react";
import { shallow } from "enzyme";
import Home from "../../../src/pages/Home";
import { withHooks } from "jest-react-hooks-shallow";
import useHome from "../../../src/hooks/useHome";

jest.mock("../../../src/hooks/useHome");

describe("Home Page", () => {
  it("should render the Home Page correctly if loading is true", () => {
    useHome.mockImplementation(() => {
      return {
        bannerData: [],
        bannerDataLoader: true,
        categoriesData: [],
        categoriesDataLoader: true,
        getBanners: jest.fn(),
        getCategories: jest.fn(),
      };
    });
    withHooks(() => {
      const component = shallow(<Home debug />);
      expect(component).toMatchSnapshot();
    });
  });

  it("should render the Home Page correctly if loading is false", () => {
    useHome.mockImplementation(() => {
      return {
        bannerData: [
          {
            bannerImageUrl: "/static/images/offers/offer1.jpg",
            bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
            isActive: true,
            order: 1,
            id: "5b6c38156cb7d770b7010ccc",
          },
          {
            bannerImageUrl: "/static/images/offers/offer2.jpg",
            bannerImageAlt: "Independence Day Deal - Rs120 off on surf",
            isActive: true,
            order: 2,
            id: "5b6c38336cb7d770b7010ccd",
          },
        ],
        bannerDataLoader: false,
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
        getBanners: jest.fn(),
        getCategories: jest.fn(),
      };
    });
    withHooks(() => {
      const component = shallow(<Home debug />);
      expect(component).toMatchSnapshot();
    });
  });
});
