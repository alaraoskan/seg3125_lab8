import React from "react";

class LoggedIn extends React.Component {

  render = () => {
     return (
       <div className="container">
       <h1 className="font-weight-light text-primary" style={{"textAlign":"center"}}><strong>Welcome User!</strong></h1>
       <p className="text-primary" style={{"textAlign":"center"}}>
          You're logged in. Here are your reviews.</p><br/>
       <br/><br/>
       </div>
     )
   }
}

export default LoggedIn;
