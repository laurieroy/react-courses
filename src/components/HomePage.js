import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>blah</h1>
      <p>Use React, Redux, and React Router to build a course list</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </div>
  );
};

export default HomePage;
