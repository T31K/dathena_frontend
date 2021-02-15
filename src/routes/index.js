import React from "react"
import { Route } from "react-router-dom"
import Home from "../views/Home"
import Create from "../views/Create"
import Edit from "../views/Edit"
import NotFound from "../views/NotFound"
import Help from "../views/Help"

const routes = [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="create" path="/create" component={Create} />,
  <Route exact key="edit" path="/edit/:id" component={Edit} />,
  <Route exact key="help" path="/help" component={Help} />,
  <Route exact key="notfound" path="*" component={NotFound} />,
]

export default routes