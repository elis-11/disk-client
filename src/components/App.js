import React from "react";
import { BrowserRouter , Route, Switch} from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Registration from "./authorization/Registration";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/registration" component={Registration}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
