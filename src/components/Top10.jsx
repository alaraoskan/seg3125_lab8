import React from "react";
import Button from 'react-bootstrap/Button';
import Popup from "reactjs-popup";

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

class Top10 extends React.Component {
  state = {
    films: [
      {id:1, name:'The Shawshank Redemption', rating:'9.3', release: "1994", storyline:'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'},
      {id:2, name:'The Godfather', rating:'9.2', release: "1972", storyline:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."},
      {id:3, name:'The Godfather: Part II', rating:'9.0', release: "1974", storyline:"The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate."},
      {id:4, name:'The Dark Knight', rating:'9.0', release: "2008", storyline:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."},
      {id:5, name:'12 Angry Men', rating:'8.9', release: "1957", storyline:"A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence."},
      {id:6, name:"Schindler's List", rating:'8.9', release: "1993", storyline:"In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis."},
      {id:7, name:'The Lord of the Rings: The Return of the King', rating:'8.9', release: "2003", storyline:"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."},
      {id:8, name:'Pulp Fiction', rating:'8.9', release: "1994", storyline:"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."},
      {id:9, name:'The Good, the Bad and the Ugly', rating:'8.8', release: "1966", storyline:"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery."},
      {id:10, name:'The Lord of the Rings: The Fellowship of the Ring', rating:'8.8', release: "2001", storyline:"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."}
    ]
  }

  mov = this.state.films.map(film => {
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
       {console.log(this.mov)}
       <h1 className="font-weight-light text-primary" style={{"textAlign":"center"}}><strong>Top 10 Movies</strong></h1>
       <p className="text-primary" style={{"textAlign":"center"}}>
         Here are the top 10 movies of all time!
       </p><br/>
       {this.mov}
       <br/><br/>
       </div>
     )
   }
}

export default Top10;
