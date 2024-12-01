import courseReducer, { initialState } from "./courseReducer";
import * as actionCreators from "../actions/courseActionCreators";

describe("courseReducer tests", () => {
  it("should return an empty array from default state", () => {
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });

  it("should return data passed with FETCH_COURSE_SUCCESS action", () => {
    const data = [
      {
        id: 1,
        name: "ES6",
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ];
    const action = actionCreators.fetchCourseSuccess(data);
    expect(courseReducer(undefined, action)).toEqual([
      {
        id: 1,
        name: "ES6",
        credit: 60,
        isSelected: false,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
        isSelected: false,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
        isSelected: false,
      },
    ]);
  });

  it("should update the right data with SELECT_COURSE action", () => {
    const data = [
      {
        id: 1,
        name: "ES6",
        credit: 60,
        isSelected: false,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
        isSelected: false,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
        isSelected: false,
      },
    ];
    const action = actionCreators.selectCourse(2);
    expect(courseReducer(data, action)).toEqual([
      {
        id: 1,
        name: "ES6",
        credit: 60,
        isSelected: false,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
        isSelected: true,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
        isSelected: false,
      },
    ]);
  });

  it("should update the right data with UNSELECT_COURSE action", () => {
    const data = [
      {
        id: 1,
        name: "ES6",
        credit: 60,
        isSelected: false,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
        isSelected: true,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
        isSelected: false,
      },
    ];
    const action = actionCreators.unSelectCourse(2);
    expect(courseReducer(data, action)).toEqual([
      {
        id: 1,
        name: "ES6",
        credit: 60,
        isSelected: false,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
        isSelected: false,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
        isSelected: false,
      },
    ]);
  });
});