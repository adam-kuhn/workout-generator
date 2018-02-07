
// Import modules
import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

// components
import Home from './Home'
import Time from './Time'
import Gear from './Gear'
import Workout from './Workout'

const App = () => {
  return (
    <div>
      <Router>
        <div >
          <h1>WOD Generator</h1>
          <Route exact path='/' component={Home}/>
          <Route path='/time' component={Time}/>
          <Route path='/gear' component={Gear}/>
          <Route path='/wod' component={Workout} />
        </div>
      </Router>
    </div>
  )
}

export default App

