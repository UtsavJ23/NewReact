import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import NewsComponent from './components/NewsComponent';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <NewsComponent pageSize={8}/>
      </div>
    )
  }
}