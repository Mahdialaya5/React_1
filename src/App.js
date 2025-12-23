import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList/MovieList';
import Filter from './components/Filter/Filter';
import data from "./data"
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails/MovieDetails';

function App() {
 
  const [movies, setmovies] = useState([])
  useEffect(() => {
  setmovies(data)
   }, [])




  function search(title) {
    setmovies([...data.filter(el=>el.title.toLowerCase().includes(title.toLowerCase()))])
   
  }

  function filterbyrating(rating) {
     setmovies([...data.filter(el=>el.rating===rating)])
     if (rating===0) {
      setmovies(data)
     }
     }
  function addmovie(newmovie) {
     setmovies([...movies,newmovie])
  }
  
  return (

    <Routes>
      <Route path='/' element={<>
          <Filter search={search} filterbyrating={filterbyrating}  addmovie={addmovie}/>
          <MovieList data={movies}/></>}/>
      <Route  path='/detail/:id' element={<MovieDetails  movies={movies}/>} />
    </Routes>
 
  )
}

export default App;
