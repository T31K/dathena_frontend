import React from "react";
import { Route } from "react-router-dom";
import Home from "../views/Home";
import Create from "../views/Create";

export default [
  <Route exact key="home" path="/" component={Home} />,
  <Route exact key="create" path="/create" component={Create} />,
]