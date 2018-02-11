
// Import modules
import React from 'react'

// components
import Home from './Home'
import Time from './Time'
import Gear from './Gear'
import Workout from './Workout'

const App = () => {
  return (
    <div>
      <div >
        <h1>WOD Generator</h1>
        <Home />
        <Time />
        <Gear />
        <Workout />
      </div>
    </div>
  )
}

export default App
