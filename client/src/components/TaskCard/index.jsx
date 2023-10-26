import React, {useState, useEffect} from "react"

export default function TaskCard({name,notes}) {

  return(
    <>
   <h2>{name}</h2>
   <p>{notes}</p>
 
    </>
  )
}