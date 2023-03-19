import React from "react";
import Discover from "./Discover";

class Home extends React.Component {

showFile = async (e) => {
  e.preventDefault()
  const reader = new FileReader()
  reader.onload = async (e) => {
    const text = (e.target.result)
    console.log(text)
    alert(text)
  };
  reader.readAsText(e.target.files[0])
}

componentDidUpdate() {
  console.log("update");
}

render = () => {
   return (
     <div className="container">
       <div className="home">
           <div className="row align-items-center">

               <h1 className="font-weight-light text-primary" style={{"textAlign":"center"}}><strong>Discover Movies</strong></h1>
               <p className="text-primary" style={{"textAlign":"center"}}>
                 You can discover new movies below!
               </p>
               <Discover />

          </div>
      </div>
    </div>
)}

}

export default Home;
