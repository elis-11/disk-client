import React from "react";
import { BrowserRouter , Route, Switch} from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Registration from "./authorization/Registration";
import Login from "./authorization/Login";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
