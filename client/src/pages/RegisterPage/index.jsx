import React, { useState, useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"

export default function RegisterPage() {
  const [textInput, setTextInput] = useState("")
  const [passwordInput, setPasswordInput] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate()


  const handleTextInput = (e) => {
    setTextInput(e.target.value)

  }
  const handlePasswordInput = (e) => {
    setPasswordInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const register = async () => {
      try {
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
        setTextInput("")
        setPasswordInput("")
        navigate("/login")
      } catch (err) {
        console.error(err.message)
        setTextInput("")
        setPasswordInput("")
        setMessage("Register unsuccessful. Try again.")
        setTimeout(()=>{
          setMessage("")
        },5000)
      }

    }
    if (textInput && passwordInput) {
      register()
    } else {
      setMessage("Register unsuccessful. Try again.")
        setTimeout(()=>{
          setMessage("")
        },5000)
    }

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
      <p>{message}</p>
      <NavLink to="/login">Already a user? Login here</NavLink>

    </>
  )
}