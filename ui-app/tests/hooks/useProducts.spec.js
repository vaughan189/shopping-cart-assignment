import React from "react";
import { shallow } from "enzyme";
import useAxios from "../../src/api/useAxios";
import useProducts from "../../src/hooks/useProducts";

import { mockCategoriesData, mockProductsData } from "../fixtures";
import { withHooks } from "jest-react-hooks-shallow";

jest.mock("../../src/api/useAxios");

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
}

describe("useProducts Hook", () => {
  it("should fetch the Products List Data", () => {
    const mockGetProducts = jest.fn();
    useAxios.mockImplementation(() => {
      return {
        response: { data: mockProductsData },
        error: "",
        loading: false,
        fetchData: mockGetProducts,
      };
    });

    let wrapper = shallow(<HookWrapper hook={() => useProducts("")} />);
    let { hook } = wrapper.find("div").props();
    let { productsData, getProductsList } = hook;
    getProductsList();
    expect(mockGetProducts).toHaveBeenCalled();
    expect(productsData).toEqual({ data: mockProductsData });
  });

  it("should fetch the categories list data", () => {
    const mockGetCategories = jest.fn();
    useAxios.mockImplementation(() => {
      return {
        response: { data: mockCategoriesData },
        error: "",
        loading: false,
        fetchData: mockGetCategories,
      };
    });

    let wrapper = shallow(<HookWrapper hook={() => useProducts("")} />);
    let { hook } = wrapper.find("div").props();
    let { categoriesData, getCategoriesList } = hook;
    getCategoriesList();
    expect(mockGetCategories).toHaveBeenCalled();
    expect(categoriesData).toEqual({ data: mockCategoriesData });
  });

  it("should trigger categories selection change", () => {
    const mockGetCategories = jest.fn();
    useStateSpy.mockImplementation((initialState) => [initialState, setState]);
    useAxios.mockImplementation(() => {
      return {
        response: { data: mockCategoriesData },
        error: "",
        loading: false,
        fetchData: mockGetCategories,
      };
    });
    withHooks(() => {
      let wrapper = shallow(<HookWrapper hook={() => useProducts("")} />);
      let { hook } = wrapper.find("div").props();
      let { handleCategorySelection } = hook;
      handleCategorySelection(mockCategoriesData[0].id);
      expect(setState).toHaveBeenCalledWith(mockCategoriesData[0].id);
    });
  });
});
