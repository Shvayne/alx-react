import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe("courseActionCreators tests", () => {
  it("selectCourse should return a SELECT_COURSE action", () => {
    const action = selectCourse(1);
    expect(action).toEqual({ type: "SELECT_COURSE", index: 1 });
  });

  it("unSelectCourse should return a UNSELECT_COURSE action", () => {
    const action = unSelectCourse(1);
    expect(action).toEqual({ type: "UNSELECT_COURSE", index: 1 });
  });
});