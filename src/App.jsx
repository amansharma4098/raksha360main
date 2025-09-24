import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Clients from './pages/Clients'
import Blog from './pages/Blog'

export default function App() {
  return (
    <div className="app-root">
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">Raksha360</div>
      <div className="links">
        <Link to="/about">About Us</Link>
        <Link to="/clients">Clients</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  )
}

function Home() {
  return (
    <div className="container">
      <header className="hero">
        <h1>🚀 Raksha360</h1>
        <p>Smart, Secure & Scalable Hospital Management Platform</p>
      </header>

      <section className="portals">
        <Card href="https://patient.raksha360.co.in/" icon="🩺" title="Patient Portal" desc="Access appointments, prescriptions, and history." />
        <Card href="https://doctor.raksha360.co.in/" icon="👨‍⚕️" title="Doctor Login" desc="Manage consultations and patient records." />
        <Card href="https://hospital.raksha360.co.in/" icon="📊" title="Hospital Portal" desc="Analytics and controls for hospital operations." />
        <Card href="https://admin.raksha360.co.in/" icon="🛠️" title="Admin Dashboard" desc="Analytics and admin controls for the platform." />
      </section>

      <section className="features">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>🩺 Patient Portal</h3>
            <p>Access appointments, prescriptions & medical history in one place.</p>
          </div>
          <div className="feature">
            <h3>👨‍⚕️ Doctor Portal</h3>
            <p>Manage patients, consultations & prescriptions seamlessly.</p>
          </div>
          <div className="feature">
            <h3>📊 Admin Dashboard</h3>
            <p>Powerful analytics and control for smooth hospital operations.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

function Card({ href, icon, title, desc }) {
  return (
    <a className="card" href={href} target="_blank" rel="noopener noreferrer">
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </a>
  )
}

function Footer() {
  return (
    <footer className="footer">© 2025 Raksha360. All Rights Reserved.</footer>
  )
}