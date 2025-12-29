import React from 'react'
import Task from '../Task/Task'
import './TaskList.css'
import { useSelector } from 'react-redux'

function TaskList() {
    const tasks=useSelector(state=>state.todo)
   
  return (
    <div className='tasks'>
     {tasks.map((el)=><Task el={el} />)}
    </div>
  )
}

export default TaskList