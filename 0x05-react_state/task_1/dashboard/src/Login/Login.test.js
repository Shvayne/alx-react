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

  it("should enable submit button when email and password are filled", () => {
    const loginWrapper = shallow(<Login />);
    const emailInput = loginWrapper.find('input[type="email"]');
    const passwordInput = loginWrapper.find('input[type="password"]');
    const submitButton = loginWrapper.find('input[type="submit"]');
    emailInput.simulate("change", { target: { value: "test@test.com" } });
    passwordInput.simulate("change", { target: { value: "test" } });
    console.log(loginWrapper.debug());
    expect(submitButton.prop("disabled")).toBe(false);
  });
});