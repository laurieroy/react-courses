import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";
import { beginApiCall } from "./apiStatusActions";

// export function createCourse(course) {
//   return { type: types.CREATE_COURSE_SUCCESS, course };
// }

// would then also make an error case
export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    dispatch(beginApiCall());
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
