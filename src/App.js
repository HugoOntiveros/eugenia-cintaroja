import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './containers/Cart'
function App() {
  return (
    <BrowserRouter>
      <Navbar />  
      <Switch>
        <Route exact path="/" component="" />
        <Route exact path="/Cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
