import React from 'react';
import '../App.css';
import Pokemon from './Pokemon';
import ReactGA from 'react-ga';

export default function Game() {
  
  ReactGA.initialize('G-HCXMLPP4LE');
  ReactGA.pageview('/');

  return( 
    <div className="SignUp">
      <Pokemon/>
    </div>
  );
}