import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("Footer component tests", () => {
  it("should render without crashing", () => {
    const footerWrapper = shallow(<Footer />);
    expect(footerWrapper.exists()).toBe(true);
  });

  it("should render p tag with text 'Copyright'", () => {
    const footerWrapper = shallow(<Footer />);
    expect(footerWrapper.find("p").text()).toHave("Copyright");
  });
});