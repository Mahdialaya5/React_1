import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList/MovieList';
import Filter from './components/Filter/Filter';
import data from "./data"
import { useState } from 'react';

function App() {
 
  const [movies, setmovies] = useState(data)
 
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
    <>
    <Filter search={search} filterbyrating={filterbyrating}  addmovie={addmovie}/>
    <MovieList data={movies}/>
    </>
  )
}

export default App;
