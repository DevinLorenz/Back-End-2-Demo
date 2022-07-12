//bringing packages in
const express = require('express')
const cors = require('cors')
const {getAllMovies,createMovie,deleteMovie,editMovie} = require('./controller')

//initialising new app with express
const app = express()

//middleware
app.use(express.json())
app.use(cors())

//get endpoint to get all movies
app.get('/api/movies',getAllMovies)

//post endpoint to create a new movie
app.post('/api/movies', createMovie)

//delete endpoint to delete movie
app.delete('/api/movies/:id',deleteMovie)

//put endpoint to edit the movie
app.put('/api/movies/:id',editMovie)

const SERVER_PORT = 4004
app.listen(SERVER_PORT,() => console.log(`server jamming on ${SERVER_PORT}`))