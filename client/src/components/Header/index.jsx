import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function Header(){
  return(
    <>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>        <NavLink to="/add">Add Task</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
    <Outlet/>
    </>
  )
}