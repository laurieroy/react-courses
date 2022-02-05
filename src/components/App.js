import React from "react";
import { Route, Switch } from "react-router-dom";


import AboutPage from "./AboutPage";
import CoursesPage from "./courses/CoursesPage";
import HomePage from "./HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";


const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
      <Route component={PageNotFound} />
    </div>
  );
};

export default App;
