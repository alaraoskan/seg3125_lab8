import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link, withRouter } from "react-router-dom";
import { Navigation, Footer, Home, Top10, Ratings, NotFoundPage } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={withRouter(Home)} />
          <Route exact path="/top10" component={withRouter(Top10)} />
          <Route exact path="/ratings" component={withRouter(Ratings)} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;