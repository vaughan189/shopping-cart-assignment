import React from "react";
import { shallow } from "enzyme";
import useAxios from "../../src/api/useAxios";
import useHome from "../../src/hooks/useHome";

import { mockCategoriesData, mockBannerData } from "../fixtures";

jest.mock("../../src/api/useAxios");

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
}

describe("useHome Hook", () => {
  it("should fetch the banners Data", () => {
    const mockGetBanners = jest.fn();
    useAxios.mockImplementation(() => {
      return {
        response: { data: mockBannerData },
        error: "",
        loading: false,
        fetchData: mockGetBanners,
      };
    });

    let wrapper = shallow(<HookWrapper hook={() => useHome("")} />);
    let { hook } = wrapper.find("div").props();
    let { bannerData, getBanners } = hook;
    getBanners();
    expect(mockGetBanners).toHaveBeenCalled();
    expect(bannerData).toEqual({ data: mockBannerData });
  });

  it("should fetch the categories data", () => {
    const mockGetCategories = jest.fn();
    useAxios.mockImplementation(() => {
      return {
        response: { data: mockCategoriesData },
        error: "",
        loading: false,
        fetchData: mockGetCategories,
      };
    });

    let wrapper = shallow(<HookWrapper hook={() => useHome("")} />);
    let { hook } = wrapper.find("div").props();
    let { categoriesData, getCategories } = hook;
    getCategories();
    expect(mockGetCategories).toHaveBeenCalled();
    expect(categoriesData).toEqual({ data: mockCategoriesData });
  });
});
