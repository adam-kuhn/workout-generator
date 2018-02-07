
// Import modules
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// components
import Home from './Home'
import Time from './Time'
import Gear from './Gear'

const App = () => {
  return (
    <div>
      <Router>
        <div className='container'>
          <h1>WOD Generator</h1>
          <Route exact path='/' component={Home}/>
          <Route path='/time' component={Time}/>
          <Route path='/gear' component={Gear}/>
        </div>
      </Router>
    </div>
  )
}

export default App

