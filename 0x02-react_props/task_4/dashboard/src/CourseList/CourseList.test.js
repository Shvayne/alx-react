import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList component tests", () => {
  it("renders CourseList component without crashing", () => {
    const listWrapper = shallow(<CourseList />);
    expect(listWrapper.exists()).toBe(true);
  });

  it("renders a table element with the id CourseList", () => {
    const listWrapper = shallow(<CourseList />);
    expect(listWrapper.find("table#CourseList")).toHaveLength(1);
  });

  it("renders two CourseListRow components within the thead element", () => {
    const listWrapper = shallow(<CourseList />);
    expect(listWrapper.find("thead").find(CourseListRow)).toHaveLength(2);
  });

  it("renders three CourseListRow components within the tbody element", () => {
    const listWrapper = shallow(<CourseList />);
    expect(listWrapper.find("tbody").find(CourseListRow)).toHaveLength(3);
  });
});