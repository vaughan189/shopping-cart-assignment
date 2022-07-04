import React from "react";
import { shallow } from "enzyme";
import Login from "../../../src/pages/Login";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Login Page", () => {
  it("should render the Login Page correctly", () => {
    const component = shallow(<Login debug />);
    expect(component).toMatchSnapshot();
  });
});
