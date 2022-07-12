//temp database
const movies = require("./db.json");

let globalId = 11;

//exportable object
module.exports = {
  getAllMovies: (req, res) => {
    res.status(200).send(movies);
  },
  createMovie: (req, res) => {
    const { title, rating, imageURL } = req.body;
    let newMovie = {
      id: globalId,
      title,
      rating,
      imageURL,
    };
    movies.push(newMovie);
    res.status(200).send(movies);
    globalId++;
  },
  deleteMovie:(req,res) => {
    let {id} = req.params
    let index = movies.findIndex(movie => +movie.id === +id)
    if(index === -1){
        res.status(400).send(`user not found`)
    } else {
        movies.splice(index,1)
        res.status(200).send(movies)
    }
  },
  editMovie:(req,res) => {
    let {id} = req.params
    let {type} = req.body
    let index = movies.findIndex(movie => +movie.id === +id)
    if(index === -1){
        res.status(400).send(`user not found`)
    } else if(movies[index].rating === 5 && type === 'plus') {
        res.status(400).send(`rating cannot go higher than 5`)
    } else if(movies[index].rating === 1 && type === 'minus'){
        res.status(400).send(`cannot go below 1`)
    } else if( type === 'plus'){
        movies[index].rating++
        res.status(200).send(movies)
    } else if( type === 'minus') {
        movies[index].rating--
        res.status(200).send(movies)
    } else {
        res.sendStatus(400)
    }
  }
};
