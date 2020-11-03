import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './components/Checkout';
import Login from './components/Login';
import { auth } from './firebase';
import Payment from './components/Payment';
import Orders from './components/Orders';
import Address from './components/Address';
import Register from './components/Register';
import { useDispatch } from "react-redux";

function App() {

  const dispatch = useDispatch();

useEffect(() => {
//componenet did mount
auth.onAuthStateChanged(authUser => {
  console.log('USER IS  >>>', authUser);
  if(authUser) {
    //the user just logged in or the userr was logged in.
    dispatch({
      type: 'SET_USER',
      user: authUser
    })
  }
  else {
    //the user logged out
    dispatch({
      type: 'SET_USER',
      user: null
    })
  }
})
}, [])

  return (
    <Router>
      <div className="app">
       
        <Switch>
        <Route path="/orders">
               <Header />
              <Orders />
          </Route>
          <Route path="/address">
               <Header />
              <Address />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/checkout">
               <Header />
              <Checkout />
          </Route>
          <Route path="/payment">
          <Header /> 
          <Payment />
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
