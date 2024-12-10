import * as actions from "../actions/courseActionTypes";
import { Map } from "immutable";
import coursesNormalizer from "../schema/courses";

export const initialState = Map([]);

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case actions.FETCH_COURSE_SUCCESS:
      const courses = action.data.map((course) => ({
        ...course,
        isSelected: false,
      }));
      const normalizedCourses = coursesNormalizer(courses);
      return state.merge(normalizedCourses);
    case actions.SELECT_COURSE:
      return state.setIn(
        ["entities", "courses", action.index.toString(), "isSelected"],
        true
      );
    case actions.UNSELECT_COURSE:
      return state.setIn(
        ["entities", "courses", action.index.toString(), "isSelected"],
        false
      );
    default:
      return state;
  }
}