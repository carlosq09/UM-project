import { Route, Switch, withRouter } from "react-router-dom";
import React, { useEffect, useState } from 'react'
//Pages
import Register from "./pages/register";
import Login from "./pages/login";
import Users from "./pages/users";
import Create from "./pages/users/Create";
//icons
import { IconContext } from "react-icons";
//Api
import Api from "./api";

function App() {
  return <>
    <IconContext.Provider value={{ color: "lightblue", size: '40px' }}>
      <Switch>
        <Route exact path="/" render={() => Api.isUserLoggedIn ? <Users /> : <Login />} />
        <Route exact path="/register" render={() => <Register />} />
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/users" render={() => Api.isUserLoggedIn ? <Users /> : <Login />} />
        <Route exact path="/users/create" render={() => Api.isUserLoggedIn ? <Create /> : <Login />} />
        <Route component={Login} />
      </Switch>
    </IconContext.Provider>

  </>

}

export default withRouter(App)
