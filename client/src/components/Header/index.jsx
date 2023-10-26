import React from "react"
import { NavLink, Outlet } from "react-router-dom"
import {useAuth} from "../../contexts"

export default function Header(){
  const {user,setUser} = useAuth();
  return(
    <>
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>        <NavLink to="/add">Add Task</NavLink>
        {user && <NavLink to="/logout">Hi {user}! Click to logout</NavLink>}
        {!user && <NavLink to="/login">Login</NavLink>}
      </nav>
    </header>
    <Outlet/>
    </>
  )
}