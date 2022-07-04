import React from "react";
import { shallow } from "enzyme";
import Cart from "../../../src/pages/Cart";

describe("Cart Page", () => {
  it("should render the Cart Page correctly", () => {
    const component = shallow(<Cart debug />);
    expect(component).toMatchSnapshot();
  });
});
