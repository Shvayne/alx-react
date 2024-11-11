import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("CourseListRow component tests", () => {
  it("renders CourseListRow component without crashing", () => {
    const rowWrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(rowWrapper.exists()).toBe(true);
  });

  it("renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const rowWrapper = shallow(
      <CourseListRow textFirstCell="test" isHeader={true} />
    );
    expect(rowWrapper.find("th")).toHaveLength(1);
    expect(rowWrapper.find("th").prop("colSpan")).toBe("2");
  });

  it("renders two cells when textSecondCell is present", () => {
    const rowWrapper = shallow(
      <CourseListRow
        textFirstCell="test"
        textSecondCell="test"
        isHeader={true}
      />
    );
    expect(rowWrapper.find("th")).toHaveLength(2);
  });

  it("renders correctly two td elements within a tr element", () => {
    const rowWrapper = shallow(
      <CourseListRow textFirstCell="test" textSecondCell="test" />
    );
    expect(rowWrapper.find("tr")).toHaveLength(1);
    expect(rowWrapper.find("tr").children()).toHaveLength(2);
    expect(rowWrapper.find("tr").childAt(0).html()).toEqual("<td>test</td>");
    expect(rowWrapper.find("tr").childAt(1).html()).toEqual("<td>test</td>");
  });
});