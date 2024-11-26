import React from "react";
import { shallow } from "enzyme";
import BodySection from "./BodySection";

describe("Normal rendering tests", () => {
  it("should render one h2 element and children correctly", () => {
    const bodySectionWrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );
    expect(bodySectionWrapper.exists()).toBe(true);
    expect(bodySectionWrapper.find("h2").text()).toBe("test title");
    expect(bodySectionWrapper.find("p").text()).toBe("test children node");
  });
});