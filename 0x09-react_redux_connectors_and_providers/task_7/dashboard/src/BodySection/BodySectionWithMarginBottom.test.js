import React from "react";
import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import BodySection from "./BodySection";

describe("Normal rendering", () => {
  it("should render correctly a BodySection component and props are passed correctly", () => {
    const sectMarginWrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );
    const sectWrapper = sectMarginWrapper.find(BodySection);
    expect(sectWrapper.exists()).toBe(true);
    expect(sectWrapper.props().title).toBe("test title");
    expect(sectWrapper.props().children).toStrictEqual(
      <p>test children node</p>
    );
  });
});