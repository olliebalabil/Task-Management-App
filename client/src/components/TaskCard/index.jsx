import React, {useState, useEffect} from "react"
import "./TaskCard.css"
import {useAuth} from "../../contexts"

export default function TaskCard({id, name,notes, username, tasks, setTasks}) {
const {user} = useAuth()
  const handleRemove = (e) => {
    const removeTask = async () => {
      const options = {
        method: "DELETE"
      }
      const response = await fetch(`http://localhost:3000/tasks/${id}`, options)
      setTasks(tasks.filter(el=>el.id!==id))
    }
    if (user === username || !username) {
      removeTask()
    } else (
      alert("You can only delete tasks that you've created and that have anonymous creators.")
    )
  }
  console.log(username)
  return(
   <div className="taskcard">
    <div>
     <h2>{name}</h2>
     <p>{notes}</p>
     {username && <p>Author: {username}</p>}
     {!username && <p>Author: Anonymous</p>}
    </div>
    <div className="cardBtns">
    <input type="checkbox"/>
    <button onClick={handleRemove}>Remove</button>
    </div>

   </div>
  )
}