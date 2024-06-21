import React from "react";
import { shallow } from "enzyme";
import useAxios from "../../src/api/useAxios";
import useCart from "../../src/hooks/useCart";

import { mockCartData } from "../fixtures";
import { withHooks } from "jest-react-hooks-shallow";

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");

jest.mock("../../src/api/useAxios");

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
}

describe("UseCart hook", () => {
  it("should return the expected cartProducts Data", () => {
    useStateSpy.mockImplementation((initialState) => [initialState, setState]);
    useAxios.mockImplementation(() => {
      return {
        response: { data: mockCartData },
        error: "",
        loading: false,
        fetchData: jest.fn(),
      };
    });
    withHooks(() => {
      let wrapper = shallow(<HookWrapper hook={() => useCart("")} />);
      let { hook } = wrapper.find("div").props();
      let { cartProductsData } = hook;
      expect(cartProductsData).toEqual({ data: mockCartData });
    });
  });

  it("should delete an item in the cart", () => {
    const mockDelete = jest.fn();
    useAxios.mockImplementation(() => {
      return {
        response: { data: mockCartData },
        error: "",
        loading: false,
        fetchData: mockDelete,
      };
    });

    let wrapper = shallow(<HookWrapper hook={() => useCart("")} />);
    let { hook } = wrapper.find("div").props();
    let { deleteCartItem } = hook;
    deleteCartItem();
    expect(mockDelete).toHaveBeenCalled();
  });

  it("should add an item in the cart", () => {
    const mockDelete = jest.fn();
    useAxios.mockImplementation(() => {
      return {
        response: { data: mockCartData },
        error: "",
        loading: false,
        fetchData: mockDelete,
      };
    });

    let wrapper = shallow(<HookWrapper hook={() => useCart("")} />);
    let { hook } = wrapper.find("div").props();
    let { addProductsToCart } = hook;
    addProductsToCart(mockCartData[0]);
    expect(mockDelete).toHaveBeenCalled();
  });
});
