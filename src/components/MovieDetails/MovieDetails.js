import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './moviedetail.css'

function MovieDetails({movies}) {


  const navigate=useNavigate()
  const {id}=useParams()
  const [data, setdata] = useState(false)
  setTimeout(() => {
      const movie=movies.find((el)=>el.id===id)
     setdata(movie)
  }, 2000);

  
  return (
    <div  className='container_details'>
       {!data ? <p>Loading...</p>:<><p>{data.description}</p>
      <iframe src={data.trailerSrc} /></>}
      <button  onClick={()=>navigate('/')} >Return</button>
    </div>
  )
}

export default MovieDetails