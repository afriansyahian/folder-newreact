import React from "react";
import "./App.css";
import SimpleTabs from "./components/simpleTabs"
// import FormikForm from "./components/formikForm"
import SingUp from "./components/singUp"
import SingIn from "./components/singIn"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/singin'>"Sing In"</Link>
            </li>
            <li>
              <Link to='/singup'>"Sing Up"</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Route path='/singin' exact component={SingIn} />
        <Route path='/singup' component={SingUp} />
        <Route path='/dashboard' component={SimpleTabs} />
      </div>
    </Router>
  )
}
    
    export default App;