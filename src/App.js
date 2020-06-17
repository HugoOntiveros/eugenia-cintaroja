import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Formulario from './containers/FormularioContainer'



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/Form" component={Formulario} />
        <Route exact path="/" component="" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
