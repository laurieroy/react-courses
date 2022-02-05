import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={PageNotFound} />
    </div>
  );
};

export default App;
