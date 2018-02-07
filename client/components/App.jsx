
// Import modules
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// components
import Home from './Home'
import Time from './Time'

const App = () => {
  return (
    <div>
      <Router>
        <div className='container'>
          <h1>WOD Generator</h1>
          <Route exact path='/' component={Home}/>
          <Route path='/time' component={Time}/>
        </div>
      </Router>
    </div>
  )
}

export default App

