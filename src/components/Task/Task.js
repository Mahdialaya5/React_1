import React from 'react'
import "./Task.css"
import { useDispatch } from 'react-redux'
import { DeleteTask, Edit } from '../../Redux/Actions/TaskAction'
import { useState } from 'react'

function Task({el}) {

  const dispatch=useDispatch()
  const HandleClick=(id)=>{
    dispatch(DeleteTask(id))   
 
  }
  const [toggle, settoggle] = useState(false)
  const [EditDescription, setEditDescription] = useState("")
  const HandleEdit=(id)=>{
    dispatch(Edit(id,EditDescription))
    settoggle(false)
  }
  return (
    <div  className='task'>
        <p>id :{el&&el.id}</p>
        <p>Description :{el&&el.description} </p>
        <input type='checkbox' checked={el&&el.isDone} readOnly ></input>
        <i class="fa-regular fa-delete-left"  onClick={()=>HandleClick(el.id)} ></i>
        <i class="fa-solid fa-pen-to-square" onClick={()=>settoggle(!toggle)}></i>
        {toggle ? <><input onChange={(e)=>setEditDescription(e.target.value)} ></input> 
           <button  onClick={()=>HandleEdit(el.id)}>Save</button></>:null}
    </div>
  )
}

export default Task