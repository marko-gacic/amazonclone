import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Checkout from './Checkout'
import Header from './Header'
import Home from './Home'
import Login from './Login'
import { auth } from './firebase'



function App() {

  useEffect(() => {

  }, [])


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />


          </Route>
          <Route path="/">
            <Header />
            <Home />

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
