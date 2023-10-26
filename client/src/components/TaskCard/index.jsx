import React, {useState, useEffect} from "react"
import "./TaskCard.css"

export default function TaskCard({name,notes}) {


  return(
   <div className="taskcard">
    <div>
     <h2>{name}</h2>
     <p>{notes}</p>
    </div>
    <input type="checkbox"/>
   </div>
  )
}