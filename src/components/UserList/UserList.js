import axios from 'axios'
import React from 'react'
import User from '../User/User'
import { useEffect } from 'react'
import { useState } from 'react'

function UserList() {
    const [users, setusers] = useState([])
    const api=async()=>{
          try {
            const res= await axios.get("https://jsonplaceholder.typicode.com/users")
              setusers(res.data)
          } catch (err) {
            console.log(err)
          }
    }
    useEffect(() => {
     // axios.get("https://jsonplaceholder.typicode.com/users")
      //.then((res)=>setusers(res.data))
      //.catch((err)=>console.log(err))
         api()
    }, [])
    
  return (
    <div className='user_container'>
    {users.map((user,i)=><User  user={user} key={i}/>)}
    </div>
  )
}

export default UserList