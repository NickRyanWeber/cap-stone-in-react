import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

const HomePage = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])

  return (
    <>
      <main className="container">
        <h1>Home Page</h1>
        <Link to="/app">Get Started</Link>
      </main>
    </>
  )
}

export default HomePage
