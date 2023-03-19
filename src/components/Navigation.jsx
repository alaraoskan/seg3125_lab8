import React from "react";
import { Link, withRouter } from "react-router-dom";

class Navigation extends React.Component {
  render(){ return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container">
          <Link className="navbar-brand" to="/">MovieBuzz</Link>
            <ul className="navbar-brand">
            <Link className="nav-link" to="/">Discover</Link><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Link className="nav-link" to="/top10">Top 10 Movies</Link><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <Link className="nav-link" to="/ratings">My Ratings</Link><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </ul>
        </div>
      </nav>
    </div>
  );}
}

export default withRouter(Navigation);
