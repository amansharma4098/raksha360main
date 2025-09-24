import React from 'react'
import { Link } from 'react-router-dom'
export default function About() {
  return (
    <div className="page container">
      <h1>About Raksha360</h1>
      <p>Raksha360 is a hospital management platform that centralizes patient, doctor, admin and hospital workflows.</p>
      <p><Link to="/">← Back to Home</Link></p>
    </div>
  )
}