import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskList from './components/TaskList/TaskList';
import AddTask from './components/AddTask/AddTask';


function App() {

   return (

    <>
    <TaskList/>
   <AddTask/>
     
    </>
 
  )
}

export default App;
