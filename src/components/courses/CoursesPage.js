import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import * as authorActions from "../../redux/actions/authorActions";
import * as courseActions from "../../redux/actions/courseActions";
import CourseList from "./CourseList";

class CoursesPage extends Component {
  componentDidMount() {
    const { courses, authors, actions } = this.props;

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }
  }

  render() {
    return (
      <>
        <h2>Courses</h2>
        <CourseList course={this.props.courses} />
      </>
    );
  }
}

CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
