import React from "react"
import {  NavLink } from "react-router-dom"

export default function LoginPage(){
  return (
    <>
    <h1>Login Page</h1>
    <form>
      <label>Username: </label>
      <input type="text" placeholder="Enter username here..."></input>
      <br />
      <label>Password: </label>
      <input type="password" placeholder="Enter password here..."></input>
    </form>
    <NavLink to="/register">Don't have a login? Register here</NavLink>
    </>
  )
}

