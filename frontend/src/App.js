import React, { useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Navbar/Navbar'
import Rol from './Rol/Rol';
import Admin from "./Admin/Admin";
import Aplicante from "./Aplicante/Aplicante";
import Coordinador from "./Coordinador/Coordinador";
import Revisor from "./Revisor/Revisor";
import Guest from "./Guest/Guest";
import NotFoundPage from './NotFound/404';
import Login from './Login/Login';
import Footer from './Footer/Footer';
import session from './session';
import UnauthorizedPage from "./NotPerm/401";

function App() {

  return (
    <div className="app">
      <Router>
        <Navbar session={session} />
        <Switch>
          <Route exact path={["/", "/Home", "/guest", "/logout"]}>
            <Guest />
          </Route>
          <Route exact path="/index">
            <Rol />
          </Route>
          <Route exact path="/Login">
            {
              !session.logged
                ?
                <Login />
                :
                <UnauthorizedPage />
            }
          </Route>
          <Route exact path="/admin">
            {
              (session.logged && session.rol === 'admin')
                ?
                <Admin />
                :
                <UnauthorizedPage />
            }
          </Route>
          <Route exact path="/coordinador">
            {
              (session.logged && session.rol === 'coordinador')
                ?
                <Coordinador />
                :
                <UnauthorizedPage />
            }
          </Route>
          <Route exact path="/revisor">
            {
              (session.logged && session.rol === 'revisor')
                ?
                <Revisor />
                :
                <UnauthorizedPage />
            }
          </Route>
          <Route exact path="/aplicante">
            {
              (session.logged && session.rol === 'aplicante')
                ?
                <Aplicante />
                :
                <UnauthorizedPage />
            }
          </Route>

          <Route component={NotFoundPage} />
        </Switch>
      </Router >
      {/* <Footer /> */}
    </div>

  );
}

export default App;
