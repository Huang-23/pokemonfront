import React,{component} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Services} from './components/Services';
import {Products} from './components/Products';
import SignUp from './components/SignUp';
import Game from './components/Game';
import ReactGA from 'react-ga';

function initizeAnalytics(){
  ReactGA.initialize("G-HCXMLPP4LE")
  ReactGA.pageview('/game')
}

function App() {

  initizeAnalytics()

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/game' component={Game} />
          <Route path='/department' component={Services} />
          <Route path='/employee' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
