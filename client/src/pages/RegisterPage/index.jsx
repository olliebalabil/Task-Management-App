import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

export default function RegisterPage() {
  const [textInput, setTextInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")

  const handleTextInput = (e) => {
    setTextInput(e.target.value)

  }
  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const register = async () => {
      const options = {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: textInput,
          password: passwordInput
        })
      }
      const response = await fetch("http://localhost:3000/users/register", options)
      const data = await response.json()
    }
    register()
setTextInput("")
setPasswordInput("")
  }
  return (
    <>
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" placeholder="Enter username here..." onChange={handleTextInput} value={textInput}></input>
        <br />
        <label>Password: </label>
        <input type="password" placeholder="Enter password here..." onChange={handlePasswordInput} value={passwordInput}></input>
        <input type="submit" />
      </form>
      <NavLink to="/login">Already a user? Login here</NavLink>

    </>
  )
}