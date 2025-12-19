import React from 'react'
import "./MovieCard.css"
import Card from 'react-bootstrap/Card';
import { Rating } from 'react-simple-star-rating';

function MovieCard({movie}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.posterUrl}/>
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
       {movie.description}
      </Card.Text>
      <Rating  readonly={true}  initialValue={movie.rating}/>
    </Card.Body>
  </Card>
  )
}

export default MovieCard