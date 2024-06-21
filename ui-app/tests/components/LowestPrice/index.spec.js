import React from "react";
import { shallow } from "enzyme";
import { LowestPriceSection } from "../../../src/components/LowestPrice";

describe("LowestPriceSection component", () => {
  it("should render the LowestPriceSection component correctly", () => {
    const component = shallow(<LowestPriceSection debug />);
    expect(component).toMatchSnapshot();
  });
});
