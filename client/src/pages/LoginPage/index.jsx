import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import {useAuth} from "../../contexts"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {user,setUser} = useAuth()
  const navigate = useNavigate()
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const login = async () => {
      const options = {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      }
      const response = await fetch("http://localhost:3000/users/login", options)
      const data = await response.json();

      if (response.status == 200) {
        //need to add token here?
        setUser(username)
        navigate("/")
      } else {
        alert(data.error)
      }
    }
    login()
  }


  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" placeholder="Enter username here..." onChange={handleUsername}></input>
        <br />
        <label>Password: </label>
        <input type="password" placeholder="Enter password here..." onChange={handlePassword}></input>
        <input type="submit" value="Login" />
      </form>
      <NavLink to="/register">Don't have a login? Register here</NavLink>
    </>
  )
}

