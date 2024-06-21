import React from "react";
import { shallow } from "enzyme";
import App from "../src/App";

describe("App component", () => {
  it("should render the App component correctly", () => {
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  });
});
