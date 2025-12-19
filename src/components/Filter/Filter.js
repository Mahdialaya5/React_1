import React from 'react'
import './Filter.css'
import { Rating } from 'react-simple-star-rating';
import { useState } from 'react';


function Filter({search,filterbyrating,addmovie}) {

     const [newMovie, setnewMovie] = useState({
        "id":Math.random()*10,
        "title": "",
        "description": "",
        "posterUrl": "",
        "rating":0,
        "trailerSrc": ""
     })
    const handleRating = (rate) => {
         filterbyrating(rate)
    }

    const handleReset = () => {
          filterbyrating(0)
      }
    const HandleSubmit=(e)=>{
        e.preventDefault()
        addmovie(newMovie)
      }
  return (
    <div className='filter_container'>
        <form onSubmit={HandleSubmit} >
            <input placeholder='title'  onChange={(e)=>setnewMovie({...newMovie,title:e.target.value})} />
            <input placeholder='description' onChange={(e)=>setnewMovie({...newMovie,description:e.target.value})}/>
            <input placeholder='rating' type='number' min={1} max={5}
            onChange={(e)=>setnewMovie({...newMovie,rating:e.target.value})}/>
            <input   onChange={(e)=>setnewMovie({...newMovie,posterUrl:e.target.value})}  />
            <button type='submit'>Submit</button>
        </form>
     <input  placeholder='search'  type='text' 
      onChange={(e)=>search(e.target.value)} />
     <Rating   onClick={handleRating}/>
     <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default Filter