import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormularioContainer from './containers/FormularioContainer';
import ProductsContainer from './containers/ProductsContainer';
import Navbar from './components/Navbar';
import './App.css';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/Form" component={FormularioContainer} />
        <Route exact path="/products" component={ProductsContainer} />
        <Route exact path="/" component="" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
