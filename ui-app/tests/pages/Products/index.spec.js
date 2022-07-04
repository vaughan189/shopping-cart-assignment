import React from "react";
import { shallow } from "enzyme";
import Products from "../../../src/pages/Products";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe("Products Page", () => {
  it("should render the Products Page correctly", () => {
    const component = shallow(<Products debug />);
    expect(component).toMatchSnapshot();
  });
});
