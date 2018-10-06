import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Immutable from 'immutable';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <p>Can you convert the "state" object in WINDOW to an Immutable.js object?</p>
          <ul>Remember:
            <li>
              The object to convert is present in WINDOW global object as "state".
            </li>
            <li>
              Immutable library is in WINDOW global object as "Immutable", so open your console and start using it!
            </li>
            <li>
              fromJS({}) is useful to convert a plain javascript object to an immutable.js object
            </li>
            <li>
              Object {} becomes Map({})
              Array [] becomes List([]);
            </li>
            <li>
              Immutable methods get and set are used for getting and setting a shallow properties
            </li>
            <li>
              Immutable methods getIn and setIn are used for getting and setting a deep properties
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const INITIAL_STATE = {
  name: 'Gru',
  company: {
    name: 'Disney',
  },
  minions: ["Kevin", "Stuart", "Bob"]
};

window.state = INITIAL_STATE;
window.Immutable = Immutable;

const immutableState = Immutable.fromJS(window.state);
const newState = immutableState.set('name', 'Daniel')
.setIn(['company', 'name'], 'Disney Pixar')
.update('minions', minions => minions.set(1, 'Daniel'));

console.log(newState);

export default App;
