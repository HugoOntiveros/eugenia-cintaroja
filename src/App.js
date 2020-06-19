import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import FormularioContainer from './containers/FormularioContainer';
import ProductsContainer from './containers/ProductsContainer';
import Cart from './containers/Cart';
import NotFoundContainer from './containers/NotFoundContainer'
import Navbar from './components/Navbar';
import './containers/home.css';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />  
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/container-nosotros" component={"Contenedor"} />
        <Route exact path="/Form" component={FormularioContainer} />
        <Route exact path="/products" component={ProductsContainer} />
        <Route exact path="/Cart" component={Cart} />
        <Route component={NotFoundContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
