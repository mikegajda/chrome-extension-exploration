import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Home } from './Home'

export default function App () {
  return (
    <Router>
      <div style={{width: "400px"}}>
        <nav className='navbar navbar-expand-lg navbar-light r-auto bg-light'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <a href={"/"}>Chrome Extension Exploration</a>
            </li>
          </ul>
        </nav>
        <div className='container mt-2'>
          <Switch>
            <Route component={Home}/>
          </Switch>
        </div>
      </div>
    </Router>

  )
}
