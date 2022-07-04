import React from "react";
import { shallow } from "enzyme";
import Home from "../../../src/pages/Home";

// jest.mock("../../../src/api/useAxios.js", () => ({
//   useAxios: () => ({
//     response: [],
//     loading: false,
//     fetchData: () => {},
//   }),
// }));

describe("Home Page", () => {
  it("should render the Home Page correctly", () => {
    const component = shallow(<Home debug />);
    expect(component).toMatchSnapshot();
  });
});
