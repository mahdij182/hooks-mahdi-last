import React from 'react';
import {Card , Button} from 'react-bootstrap'

export default function MovieCard({movie}) {
  return (
  <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterurl} />
  <Card.Body>
    <Card.Title>{movie.name}</Card.Title>
    <Card.Text>
      {movie.rating}
      {movie.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  </div>
  )
}
