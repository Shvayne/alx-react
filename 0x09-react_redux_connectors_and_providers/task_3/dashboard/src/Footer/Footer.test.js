/**
 * @jest-environment jsdom
 */
import React from "react";
import Footer from "./Footer";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext } from "../App/AppContext";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Footer component tests", () => {
  it("should render without crashing", () => {
    const footerWrapper = shallow(<Footer />);
    expect(footerWrapper.exists()).toBe(true);
  });

  it("should render p tag with text 'Copyright'", () => {
    const footerWrapper = shallow(<Footer />);
    expect(footerWrapper.find("p").text()).toContain("Copyright");
  });

  it('should not render "Contact us" link when user is not logged in', () => {
    const footerWrapper = shallow(<Footer />);
    expect(footerWrapper.find("a").exists()).toBe(false);
  });

  it('should render "Contact us" link when user is logged in', () => {
    const user = { email: "test@tes.com", password: "test", isLoggedIn: true };
    const footerWrapper = mount(
      <AppContext.Provider value={{ user }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(footerWrapper.find("a").exists()).toBe(true);
    footerWrapper.unmount();
  });
});