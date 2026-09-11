import React from "react";
import { shallow } from "enzyme";
import { Routes } from "../src/routes";

describe("Router component", () => {
  it("should render router component", () => {
    const component = shallow(<Routes />);
    expect(component).toMatchSnapshot();
  });
});
