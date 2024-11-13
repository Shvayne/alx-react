import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header component tests", () => {
  it("should render without crashing", () => {
    const headerWrapper = shallow(<Header />);
    expect(headerWrapper.exists()).toBe(true);
  });

  it("should render img and h1 tags", () => {
    const headerWrapper = shallow(<Header />);
    expect(headerWrapper.find("img").exists()).toBe(true);
    expect(headerWrapper.find("h1").exists()).toBe(true);
  });
});