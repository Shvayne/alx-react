import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe("Login component tests", () => {
  it("should render without crashing", () => {
    const loginWrapper = shallow(<Login />);
    expect(loginWrapper.exists()).toBe(true);
  });

  it("should render 2 input tags and 2 label tags", () => {
    const loginWrapper = shallow(<Login />);
    expect(loginWrapper.find("input").length).toBe(2);
    expect(loginWrapper.find("label").length).toBe(2);
  });
});