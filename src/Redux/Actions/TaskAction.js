import { ADD, DELETE, EDIT } from "../const/Taskconst"

export  const addtask=(newtask)=>{
 
    return {type:ADD,payload:newtask}
}
export const DeleteTask=(id)=>{
    return {type:DELETE,payload:id}
}
export const Edit=(id,NewDescription)=>{
    return {type:EDIT,payload:{id,NewDescription}}
}