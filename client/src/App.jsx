import React from "react"
import { Routes, Route } from "react-router-dom"
import { HomePage, AddPage, NotFoundPage } from "./pages"
import { Header } from "./components"
import "./App.css"

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}