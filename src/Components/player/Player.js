import React from 'react'

import Card from 'react-bootstrap/Card';

function Player({p}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={p.imageUrl} />
      <Card.Body>
        <Card.Title>{p.name}</Card.Title>
        <Card.Text>
         {p.team}
         {p.age}
        </Card.Text>
       
      </Card.Body>
    </Card>
  )
}
Player.defaultProps={
    name:"Inconnu",
    imageUrl:"https://media.ouest-france.fr/v1/pictures/11c4fa71f3e89a95bda2437051be08f0-15583157.jpg?width=1260&client_id=eds&sign=328706535ea4613bc48fd5705385c88c33f0e9dfecd0813785de1d0b6a2dcf39",
    team:"",age:10
}
export default Player