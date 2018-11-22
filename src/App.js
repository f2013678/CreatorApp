import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomepageLayout from './components/home';
import AppRouter from './components/Router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter/>
      </div>
    );
  }
}

export default App;
