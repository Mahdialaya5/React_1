import React from 'react'
import "./MovieCard.css"
import Card from 'react-bootstrap/Card';
import { Rating } from 'react-simple-star-rating';
import { Link } from 'react-router-dom';

function MovieCard({movie}) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={movie.posterUrl}/>
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
     
      </Card.Text>
      <Rating  readonly={true}  initialValue={movie.rating}/>
     <Link  to={`/detail/${movie.id}`} ><button>Details</button></Link>
    </Card.Body>
  </Card>
  )
}

export default MovieCard