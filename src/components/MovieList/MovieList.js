import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieList.css"


function MovieList({data}) {
  return (<div className='list'>
   {data.map((el)=><MovieCard movie={el} key={el.id}/>)}
   </div>
  )
}

export default MovieList