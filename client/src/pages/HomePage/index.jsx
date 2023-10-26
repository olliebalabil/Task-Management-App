import React, { useState, useEffect } from "react"
import { TaskCard } from "../../components"

export default function HomePage() {
  const [tasks, setTasks] = useState([])
  const [completed, setCompleted] = useState(false)
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
      <h1>Tasks</h1>
      <em>View, edit and add tasks!</em>
      {tasks.map((el) => <TaskCard id={el.id} name={el.name} notes={el.notes} completed={completed} setCompleted={setCompleted} key={el.id}/>)}

    </>
  )
}