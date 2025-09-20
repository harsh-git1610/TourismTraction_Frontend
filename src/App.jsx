import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import DestinationDetail from './pages/DestinationDetail'
import Culture from './pages/Culture'
import TripPlanner from './pages/TripPlanner'
import WhyJharkhand from './pages/WhyJharkhand'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/:id" element={<DestinationDetail />} />
            <Route path="/culture" element={<Culture />} />
            <Route path="/trip-planner" element={<TripPlanner />} />
            <Route path="/why-jharkhand" element={<WhyJharkhand />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  )
}

export default App
