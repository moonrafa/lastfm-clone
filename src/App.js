import React from 'react'
import './App.css'
import Nav from './components/Nav'
import RecommendationsBar from './components/RecommendationsBar'
import Homescreen from './components/Homescreen'

function App() {
  return (
    <div className="app">
      <Nav />
      <RecommendationsBar />
      <Homescreen />
    </div>
  )
}

export default App
