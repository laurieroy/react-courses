import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi"
// import loadCoursesSuccess from "";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

// would then also make an error case
export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch((error) => {
        throw error;
      });
  };
}