import React from 'react'
import './Filter.css'
import { Rating } from 'react-simple-star-rating';
import { useRef } from 'react';


function Filter({search,filterbyrating,addmovie}) {

     let title=useRef('')
     let description=useRef('')
     let posterUrl=useRef('')
     let rating=useRef(0)
    const handleRating = (rate) => {
         filterbyrating(rate)
    }

    const handleReset = () => {
          filterbyrating(0)
      }
    const HandleSubmit=(e)=>{
        e.preventDefault()
        addmovie({"title":title.current.value,"description":description.current.value,"posterUrl":posterUrl.current.value,"rating":rating.current.value,id:Math.random()*10})
      }
  return (
    <div className='filter_container'>
        <form onSubmit={HandleSubmit} >
            <input placeholder='title'  ref={title} />
            <input placeholder='description' ref={description}/>
            <input placeholder='rating' type='number' min={1} max={5} ref={rating}/>
            <input   ref={posterUrl} />
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