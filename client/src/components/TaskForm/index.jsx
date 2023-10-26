import React, { useState, useEffect } from "react"
import "./TaskForm.css"

export default function TaskForm() {
  const [name, setName] = useState("")
  const [notes, setNotes] = useState("")

  const handleInput = (e) => {
    setName(e.target.value)
  }

  const handleTextarea = (e) => {
    setNotes(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const addTask = async () => {
      const options = {
        method: "POST",
        body: JSON.stringify({
          task_name: name,
          task_notes: notes
        }),
        headers: {
          'Content-type': 'application/json'
        }
      }
      const response = await fetch('http://localhost:3000/tasks', options)
      const data = await response.json()
    }
    addTask()
    setName("")
    setNotes("")
  }

  return (
    <>
      <form className="taskform" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter task here..." onChange={handleInput} value={name} />
        <textarea placeholder="Add notes here..." onChange={handleTextarea} value={notes} />
        <input type="submit" value="Add" />
      </form>
    </>
  )
}