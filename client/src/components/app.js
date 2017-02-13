import React, { Component } from 'react';
import Header from './header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 className="text-center">React Auth App</h1>
        {this.props.children}
      </div>
    );
  }
}
