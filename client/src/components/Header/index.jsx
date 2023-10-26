import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function Header(){
  return(
    <>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>        <NavLink to="/add">Add Task</NavLink>
      </nav>
    </header>
    <Outlet/>
    </>
  )
}