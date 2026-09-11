import React from "react";
import reactRouterDom from "react-router-dom";
import { shallow } from "enzyme";
import { Header } from "../../../src/components/Header";
import { useMediaQuery } from "@mui/material";

import { withHooks } from "jest-react-hooks-shallow";

jest.mock("react-router-dom");

const pushMock = jest.fn();
reactRouterDom.useHistory = jest.fn().mockReturnValue({ push: pushMock });

const anchorMock = jest.fn();

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  useMediaQuery: jest.fn().mockReturnValue(false),
}));

describe("Header component", () => {
  it("should render the Header component correctly", () => {
    withHooks(() => {
      const component = shallow(<Header debug />);
      expect(component).toMatchSnapshot();
    });
  });

  it("should trigger the show cart function on button click", () => {
    const component = shallow(<Header debug />);
    component
      .find("#cart-btn")
      .simulate("click", { currentTarget: anchorMock });
    expect(anchorMock).toHaveBeenCalled();
  });

  it("should trigger the history push cart function on button click", () => {
    useMediaQuery.mockReturnValue(true);
    const component = shallow(<Header debug />);
    component
      .find("#cart-btn")
      .simulate("click", { currentTarget: anchorMock });
    expect(anchorMock).toHaveBeenCalled();
  });

  it("should trigger the history push when clicked on home button", () => {
    const component = shallow(<Header debug />);
    component.find("#Home-btn").simulate("click");
    expect(pushMock).toHaveBeenCalled();
  });
  it("should trigger the history push when clicked on home icon button", () => {
    const component = shallow(<Header debug />);
    component.find("#home-icon-btn").simulate("click");
    expect(pushMock).toHaveBeenCalled();
  });
  it("should trigger the history push when clicked on register button", () => {
    const component = shallow(<Header debug />);
    component.find("#register-page-btn").simulate("click");
    expect(pushMock).toHaveBeenCalled();
  });
  it("should trigger the history push when clicked on login button", () => {
    const component = shallow(<Header debug />);
    component.find("#login-page-btn").simulate("click");
    expect(pushMock).toHaveBeenCalled();
  });
});
