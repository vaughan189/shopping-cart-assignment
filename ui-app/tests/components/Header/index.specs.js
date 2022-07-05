import React from "react";
import reactRouterDom from "react-router-dom";
import emotion from "@emotion/react";
import { shallow } from "enzyme";
import { Header } from "../../../src/components/Header";

// TODO:Need to fix this test case

jest.mock("react-router-dom");
const pushMock = jest.fn();
reactRouterDom.useHistory = jest.fn().mockReturnValue({ push: pushMock });

jest.mock("@emotion/react");
const themeMock = jest
  .fn()
  .mockReturnValue("@media (min-width:600px) and (max-width:899.95px)");
emotion.useTheme = jest.fn().mockReturnValue({
  breakpoints: {
    only: () => themeMock,
  },
});

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  useMediaQuery: jest.fn().mockReturnValue(false),
}));

describe("Header component", () => {
  it("should render the Header component correctly", () => {
    const component = shallow(<Header debug />);
    expect(component).toMatchSnapshot();
  });
});
