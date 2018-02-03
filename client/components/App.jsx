
// Import modules
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// components
import Home from './Home'

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <h1>WOD Generator</h1>
          <Route path='/' component={Home}/>
        </div>
      </Router>
    </div>
  )
}

export default App

