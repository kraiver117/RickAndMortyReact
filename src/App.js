import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import index from './pages/index'

function App() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={index}/>
          <Route exact path='/Home' component={Home}/>
        </Switch>
      </BrowserRouter>
    )  
  
}

export default App;
