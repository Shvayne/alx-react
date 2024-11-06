import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList component tests", () => {
  it("renders CourseList component without crashing when no listCourses provided", () => {
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

  it("renders CourseList component without crashing when listCourses is empty", () => {
    const listWrapper = shallow(<CourseList listCourses={[]} />);
    expect(listWrapper.exists()).toBe(true);
  });

  it("renders three CourseListRow components within the tbody element when listCourses is provided", () => {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    const listWrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(listWrapper.find("tbody").find(CourseListRow)).toHaveLength(3);
  });
});