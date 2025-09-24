import React from 'react'
import { Link } from 'react-router-dom'
export default function Blog(){
  return (
    <div className="page container">
      <h1>Raksha360 Blog</h1>
      <p>Coming soon — articles about healthcare tech and product updates.</p>
      <p><Link to="/">← Back to Home</Link></p>
    </div>
  )
}