import * as actions from "../actions/courseActionTypes";

export const initialState = [];

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_COURSE_SUCCESS:
      const courses = action.data.map((course) => ({
        ...course,
        isSelected: false,
      }));
      return courses;
    case actions.SELECT_COURSE:
      return state.map((course) =>
        course.id === action.index ? { ...course, isSelected: true } : course
      );
    case actions.UNSELECT_COURSE:
      return state.map((course) =>
        course.id === action.index ? { ...course, isSelected: false } : course
      );
    default:
      return state;
  }
}