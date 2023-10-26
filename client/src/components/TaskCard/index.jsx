import React, {useState, useEffect} from "react"
import "./TaskCard.css"

export default function TaskCard({id, name,notes, tasks, setTasks}) {

  const handleRemove = (e) => {
    const removeTask = async () => {
      const options = {
        method: "DELETE"
      }
      const response = await fetch(`http://localhost:3000/tasks/${id}`, options)
      setTasks(tasks.filter(el=>el.id!==id))
    }
    removeTask()
  }

  return(
   <div className="taskcard">
    <div>
     <h2>{name}</h2>
     <p>{notes}</p>
    </div>
    <div className="cardBtns">
    <input type="checkbox"/>
    <button onClick={handleRemove}>Remove</button>
    </div>

   </div>
  )
}