import React from "react";
import Button from "react-bootstrap/Button";
import Popup from "reactjs-popup";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function handleSubmit(event) {
  event.preventDefault();
  var name =  document.getElementById("name");
  var comment =  document.getElementById("comment");
  if (name.value === "" || comment.value === ""){
  alert("Review failed!")
}
else {
  alert("Review submitted!");
  name.value="";
  comment.value="";}
}
const lila = "#9C55FC";
const PopupExample = () => (
  <Popup trigger={<Button className="" style={{backgroundColor: lila}}>Review</Button>} position="right center">
   <div class="card-body bg-info">
    <form onSubmit={handleSubmit}>
              <label for="name" className="text-white">Name:</label>
              <input data-toggle="tooltip" data-placement="top" title="Enter your name!" class="form-control" type="text" id="name" name="number"/><br/>
              <label for="review" className="text-white">Review:</label>
              <input class="form-control" data-toggle="tooltip" data-placement="top" title="Enter your comments" type="text" id="comment"/><br/>
              <Button block variant="outline-primary text-white" className="btn" style={{backgroundColor: lila}} type="submit">Submit</Button>
              </form>
            </div>

  </Popup>
);

class Discover extends React.Component {
  getRandomNumber = () => {
    return Math.random()*5
  }

  state = {
    films: [
      {id:11, name:'Scream', rating:'7.3', release: "2023", storyline:"In the next installment, the survivors of the Ghostface killings leave Woodsboro behind and start a fresh chapter in New York City."},
      {id:12, name:'Avatar', rating:'7.8', release: "2022", storyline:"Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home."},
      {id:13, name:'Everything Everywhere All at Once', rating:'7.9', release: "2022", storyline:"A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led."},
      {id:14, name:'Blade Runner 2049', rating:'?', release: "2017-10-05", storyline:"A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years."},
      {id:15, name:'Kimi No Na Wa (Your Name)', rating:'?', release: "2017-04-07", storyline:'Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?'},
      {id:16, name:'Guardians of the Galaxy Vol. 2', rating:'?', release: "2017-04-19", storyline:"The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage."},
      {id:17, name:'Happy Death Day', rating:'?', release: "2017-10-13", storyline:"A college student must relive the day of her murder over and over again, in a loop that will end only when she discovers her killer's identity."},
      {id:18, name:'It', rating:'?', release: "2017-09-08", storyline:"A group of bullied kids band together when a shapeshifting demon, taking the appearance of a clown, begins hunting children."}
    ]
  }


  mov = this.state.films.map((film, index) => {
    return (
      <div className="container h-auto w-50" key={film.id}>
        <div className="card bg-primary" style={{"textAlign":"center"}}>
          <img className="card-img-top" src={require('./img/'+film.name+'.jpg')} height="auto" width="auto" alt="Card image cap"/>
          <div className="card-body text-white">
            <h4 className="card-title"><strong>{film.name}</strong></h4>
            <h5>Year: {film.release}</h5>
            <h5>Rating: {film.rating} &#9733;</h5>
            <p className="card-text">{film.storyline}</p>
            <PopupExample /><br/><br/>
          </div>
        </div><br/>
      </div>
    )
  })


  render = () => {
     return (
       <div className="container">
       {console.log("Movies")}
       {this.mov}
       <br/><br/>
       </div>
     )
   }
}

export default Discover;
