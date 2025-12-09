import React from 'react'
import Player from '../player/Player'
import players from "../../players" 

function PlayerList() {
   const style={display:"flex",justifyContent:"space-evenly",flexWrap: "wrap"}
  return (
    <div className='list' style={style}>
  {players.map((el,i)=><Player p={el} key={i}/>) }
    </div>
  )
}



export default PlayerList