import React from 'react';
import './App.css';
import './containers/home.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './containers/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/container-nosotros" component={"Contenedor"} />
        <Route exact path="/" component={"Contenedor"} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
