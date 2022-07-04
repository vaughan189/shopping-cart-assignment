import React from "react";
import { shallow } from "enzyme";
import Register from "../../../src/pages/Register";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Register Page", () => {
  it("should render the Register Page correctly", () => {
    const component = shallow(<Register debug />);
    expect(component).toMatchSnapshot();
  });
});
