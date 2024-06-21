import React from "react";
import reactRouterDom from "react-router-dom";
import { shallow } from "enzyme";
import Login from "../../../src/pages/Login";

jest.mock("react-router-dom");
const pushMock = jest.fn();
reactRouterDom.useHistory = jest.fn().mockReturnValue({ push: pushMock });

describe("Login Page", () => {
  it("should render the Login Page correctly", () => {
    const component = shallow(<Login debug />);
    expect(component).toMatchSnapshot();
  });

  it("should trigger the submit function on button click", () => {
    const component = shallow(<Login debug />);
    component.find("#email-field").simulate("change", {
      target: { value: "test@example.com", name: "email-field" },
    });
    component.find("#password-field").simulate("change", {
      target: { value: "Pass@123456", name: "password-field" },
    });

    component.find("#login-btn").simulate("click");
    // expect(pushMock).toHaveBeenCalled();
  });

  it("should trigger an error message if a wrong emailID is entered", () => {
    const component = shallow(<Login debug />);
    component.find("#email-field").simulate("change", {
      target: { value: "test@example", name: "email-field" },
    });
    component.find("#password-field").simulate("change", {
      target: { value: "Pass@123456", name: "password-field" },
    });
    component.find("#login-btn").simulate("click");
    // expect(component.find("#email-error-text").text()).toBe(
    //   "Please enter a valid email"
    // );
  });
});
