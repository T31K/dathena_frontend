import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import routes from './routes'
import Navbar from './components/Navbar'

export default function App () {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>{routes}</Switch>
      </main>
    </Router>
  )
}
