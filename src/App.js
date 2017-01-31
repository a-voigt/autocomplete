import React, { Component } from 'react';
import Autocomplete from './components/Autocomplete';
import './App.css';

const items = [
  "Livepath",
  "Youspan",
  "Skyble",
  "Browsedrive",
  "Youtags",
  "Shufflester",
  "Devcast",
  "Fatz",
  "Cogilith",
  "Digitube",
  "Feednation",
  "Feedbug",
  "Tagtune",
  "Tekfly",
  "Camido",
  "Eamia",
  "Trilia",
  "Youfeed",
  "Yakitri",
  "Voonte"
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Autocomplete Sample App</h2>
        <Autocomplete items={items}/>
      </div>
    );
  }
}

export default App;
