import React from "react";
import reactRouterDom from "react-router-dom";
import { shallow } from "enzyme";
import { Explore } from "../../../../../src/components/Categories/components/Explore";

jest.mock("react-router-dom");
const pushMock = jest.fn();
reactRouterDom.useHistory = jest.fn().mockReturnValue({ push: pushMock });

describe("Explore component", () => {
  it("should render the Explore component correctly", () => {
    const component = shallow(<Explore debug />);
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
    const component = shallow(<Explore {...props} debug />);
    component.find("#explore-more-btn").simulate("click");
    expect(pushMock).toHaveBeenCalled();
  });
});
