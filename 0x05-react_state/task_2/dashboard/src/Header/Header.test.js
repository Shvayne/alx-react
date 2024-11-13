/**
 * @jest-environment jsdom
 */
import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext, user, logOut } from "../App/AppContext";

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

describe("Context tests", () => {
  it("should not create logoutSection when Header is mounted with default context", () => {
    const headerWrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(headerWrapper.find("#logoutSection").exists()).toBe(false);
  });

  const testUser = {
    email: "test@test.com",
    password: "test",
    isLoggedIn: true,
  };
  it("should create logoutSection when Header is mounted with context where user.isLoggedIn is true", () => {
    const headerWrapper = mount(
      <AppContext.Provider value={{ user: testUser, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(headerWrapper.find("#logoutSection").exists()).toBe(true);
  });

  it("should call logOut when logout link is clicked", () => {
    const logOutMock = jest.fn();
    const headerWrapper = mount(
      <AppContext.Provider value={{ user: testUser, logOut: logOutMock }}>
        <Header />
      </AppContext.Provider>
    );
    headerWrapper.find("a").simulate("click");
    expect(logOutMock).toHaveBeenCalled();
  });
});