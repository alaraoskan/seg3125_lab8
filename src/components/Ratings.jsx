import React from "react";
import LoggedIn from "./LoggedIn";
import LogIn from "./LogIn";


function Ratings() {
  const logged_in = false;
  return (
    logged_in ? (<LoggedIn />) : (<LogIn />)
  );
}

export default Ratings;
