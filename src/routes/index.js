import React from "react";
import { Route } from "react-router-dom";
import Home from "../views/Home";
import Create from "../views/Create";
import Edit from "../views/Edit";

export default [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="create" path="/create" component={Create} />,
  <Route exact key="edit" path="/edit/:id" component={Edit} />,
]