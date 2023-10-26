import React, { useState, useEffect } from "react"
import { TaskCard } from "../../components"

export default function HomePage() {
  const [tasks, setTasks] = useState([])

  const fetchAPI = async () => {
    const response = await fetch('http://localhost:3000/tasks')
    const data = await response.json()
    setTasks(data)
  }

  useEffect(() => {
    fetchAPI()
  }, [])


  return (
    <>
    {tasks.map((el, i)=> <TaskCard id={el.id} name={el.name} notes={el.notes}/>)}
    
    </>
  )
}