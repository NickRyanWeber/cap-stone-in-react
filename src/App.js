import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from './Pages/HomePage.jsx'
import MainApp from './Pages/MainApp.jsx'

class App extends Component {
  render() {
    return (
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/app" component={MainApp}></Route>
          </Switch>
        </Router>
      </main>
    )
  }
}

export default App
