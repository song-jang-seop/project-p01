import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='gray-background'>
        <img src={logo} lat="logo" alt="logo"/>
        <h2>KB Admin</h2>
      </div>
    );
  }
}

export default App;
