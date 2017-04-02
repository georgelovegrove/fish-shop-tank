import React, { Component } from 'react';

import Header from './shared/components/header';
import Store from './store/containers/store';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="page">
        <Header />
        <Store />
      </div>
    );
  }
}

export default App;
