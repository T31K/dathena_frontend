import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import routes from './routes'
import Wrapper from './components/Wrapper'

export default function App () {
  return (
    <Router>
      <Wrapper/>
        <main>
        <Switch>{routes}</Switch>
        </main>
    </Router>
  )
}
