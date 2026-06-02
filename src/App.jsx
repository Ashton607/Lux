import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Dashboard from './components/dashboard/Dashboard'
import LearnMore from './components/discovery/LearnMore'

function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/discovery" element={<LearnMore/>}/>
      </Routes>
    </Router>
  )
}

export default App
