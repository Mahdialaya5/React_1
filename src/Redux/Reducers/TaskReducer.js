import { ADD, DELETE, EDIT } from "../const/Taskconst"

const initialState={todo:[
    { description: "hello", user: "user1" ,id:1,isDone:true},
    { description: "hi", user: "user2",id:2,isDone:false},
    { description: "welcome", user: "user3",id:3,isDone:false},
]}

export const todoReducer=(state=initialState,action)=>{

switch (action.type) {
    case ADD:
        return {...state,todo:[...state.todo,action.payload]}
       
    case DELETE:
        return {...state,todo:[...state.todo.filter((T)=>T.id!==action.payload)]}  
    case EDIT:
        return {...state,todo:[...state.todo.map((T)=>T.id===action.payload.id?{...T,description:action.payload.NewDescription}:T)]} 
    
       
    default:     
    return state}  


}