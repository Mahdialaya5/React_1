import React from 'react'
import './AddTask.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtask } from '../../Redux/Actions/TaskAction'

function AddTask() {
    const [newtask, setnewtask] = useState({
        "id":"",
        "description":"",
        "isDone":false
    })
    const dispatch=useDispatch()
    
    const handleSubmit=(e)=>{
         e.preventDefault()
         dispatch(addtask(newtask))
    }
  return (
    <form  onSubmit={handleSubmit}>
        <input placeholder='id' onChange={(e)=>setnewtask({...newtask,id:e.target.value})}/>
        <input placeholder='add description'  onChange={(e)=>setnewtask({...newtask,description:e.target.value})}/>
      <input type='checkbox' onChange={()=>setnewtask({...newtask,isDone:!newtask.isDone})}/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default AddTask