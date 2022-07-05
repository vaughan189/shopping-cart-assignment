import React from "react";
import reactRouterDom from "react-router-dom";
import { shallow } from "enzyme";
import { Categories, CategoriesItem } from "../../../src/components/Categories";

jest.mock("react-router-dom");
const pushMock = jest.fn();
reactRouterDom.useHistory = jest.fn().mockReturnValue({ push: pushMock });

describe("Categories component", () => {
  it("should render the Categories component correctly", () => {
    const props = {
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
    };
    const component = shallow(<Categories {...props} debug />);
    expect(component).toMatchSnapshot();
  });

  it("should render the Categories Item component correctly for left position", () => {
    const props = {
      name: "Beverages",
      description:
        "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
      imageUrl: "/static/images/category/beverages.png",
      position: 0,
    };
    const component = shallow(<CategoriesItem {...props} debug />);
    expect(component).toMatchSnapshot();
  });

  it("should render the Categories Item component correctly for right position", () => {
    const props = {
      name: "Beverages",
      description:
        "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
      imageUrl: "/static/images/category/beverages.png",
      position: 1,
    };
    const component = shallow(<CategoriesItem {...props} debug />);
    expect(component).toMatchSnapshot();
  });

  it("should trigger the explore route function on clicking the left side button", () => {
    const props = {
      name: "Beverages",
      description:
        "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
      imageUrl: "/static/images/category/beverages.png",
      position: 0,
    };
    const component = shallow(<CategoriesItem {...props} debug />);
    component.find("#left-explore-btn").simulate("click");
    expect(pushMock).toHaveBeenCalled();
  });

  it("should trigger the explore route function on clicking the right side button", () => {
    const props = {
      name: "Beverages",
      description:
        "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
      imageUrl: "/static/images/category/beverages.png",
      position: 1,
    };
    const component = shallow(<CategoriesItem {...props} debug />);
    component.find("#right-explore-btn").simulate("click");
    expect(pushMock).toHaveBeenCalled();
  });
});
