import React, { Component } from 'react';
import Autocomplete from './components/Autocomplete';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Autocomplete Sample App</h2>
        <Autocomplete></Autocomplete>
      </div>
    );
  }
}

export default App;
