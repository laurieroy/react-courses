import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
// import loadCoursesSuccess from "";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

// would then also make an error case
export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}
