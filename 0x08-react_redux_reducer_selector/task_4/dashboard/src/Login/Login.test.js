import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Login component tests", () => {
  it("should render without crashing", () => {
    const loginWrapper = shallow(<Login />);
    expect(loginWrapper.exists()).toBe(true);
  });

  it("should render at least 2 input tags and 2 label tags", () => {
    const loginWrapper = shallow(<Login />);
    expect(loginWrapper.find("input").length).toBeGreaterThanOrEqual(2);
    expect(loginWrapper.find("label").length).toBe(2);
  });

  it("should have submit button disabled by default", () => {
    const loginWrapper = shallow(<Login />);
    const submitButton = loginWrapper.find('input[type="submit"]');
    expect(submitButton.prop("disabled")).toBe(true);
  });

  Wrapper.find('input[type="email"]');
});