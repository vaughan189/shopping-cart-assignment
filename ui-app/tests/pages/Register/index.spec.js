import React from "react";
import reactRouterDom from "react-router-dom";
import { shallow } from "enzyme";
import Register from "../../../src/pages/Register";

jest.mock("react-router-dom");
const pushMock = jest.fn();
reactRouterDom.useHistory = jest.fn().mockReturnValue({ push: pushMock });

describe("Register Page", () => {
  it("should render the Register Page correctly", () => {
    const component = shallow(<Register debug />);
    expect(component).toMatchSnapshot();
  });

  // it("should trigger the submit function on button click", () => {
  //   const component = shallow(<Register debug />);
  //   component.find("#submit-btn").simulate("click");
  //   expect(pushMock).toHaveBeenCalled();
  // });
});
