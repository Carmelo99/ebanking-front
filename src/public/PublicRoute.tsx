import React from 'react'
import { Route, Switch } from "react-router-dom";
import Login from "../public/login/Login";

function PublicRoute() {
  return (
    <Switch>
    <Route path="/" component={Login} />
  </Switch>
  )
}

export default PublicRoute