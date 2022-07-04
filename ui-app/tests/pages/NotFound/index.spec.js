import React from "react";
import { shallow } from "enzyme";
import NotFound from "../../../src/pages/NotFound";

jest.mock("react-router-dom", () => ({
  useLocation: () => ({
    pathname: "",
  }),
}));

describe("NotFound Page", () => {
  it("should render the NotFound Page correctly", () => {
    const component = shallow(<NotFound debug />);
    expect(component).toMatchSnapshot();
  });
});
