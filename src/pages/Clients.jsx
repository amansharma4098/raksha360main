import React from 'react'
import { Link } from 'react-router-dom'
export default function Clients(){
  return (
    <div className="page container">
      <h1>Our Clients</h1>
      <p>List of hospitals/organizations using Raksha360.</p>
      <p><Link to="/">← Back to Home</Link></p>
    </div>
  )
}