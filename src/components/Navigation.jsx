import React from "react";
import { Link, withRouter } from "react-router-dom";

class Navigation extends React.Component {
  render(){ return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary text-white fixed-top">
        <div className="container">
          <Link className="navbar-brand text-white" to="/">MovieBuzz</Link>
            <Link className="nav-link" to="/">Discover</Link>
            <Link className="nav-link" to="/top10">Top 10 Movies</Link>
            <Link className="nav-link" to="/ratings">My Ratings</Link>
        </div>
      </nav>
      <br/>
      <br/>
      <br/>
    </div>
  );}
}

export default withRouter(Navigation);
