import React, { Component } from 'react';
import './App.css';
import SearchMoviesComponent from './SearchMoviesComponent';

class App extends Component {
  render(){
  return (
    <div className="container">
      <h1 className="title">
          React movie search
      </h1>
      <SearchMoviesComponent/>
    </div>
  );
}
}

export default App;
