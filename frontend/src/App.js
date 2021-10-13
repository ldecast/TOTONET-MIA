import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Navbar from './Navbar/Navbar'
import Rol from './Rol/Rol';
import Admin from "./Admin/Admin";
import Aplicante from "./Aplicante/Aplicante";
import Coordinador from "./Coordinador/Coordinador";
import Revisor from "./Revisor/Revisor";
import Guest from "./Guest/Guest";
import NotFoundPage from './NotFound/404';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Router>
        <Switch>
          <Route exact path="/index">
            <Rol />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/coordinador">
            <Coordinador />
          </Route>
          <Route path="/revisor">
            <Revisor />
          </Route>
          <Route path="/aplicante">
            <Aplicante />
          </Route>
          <Route path="/guest">
            <Guest />
          </Route>
          <Route component={NotFoundPage} />
        </Switch>
      </Router >
    </div>

  );
}

export default App;
