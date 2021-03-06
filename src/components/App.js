import React, { Component } from 'react';
import DealsTableWithData from '../containers/DealsTableWithData';
import NewDealFormWithDispatch from '../containers/NewDealFormWithDispatch';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DealsTableWithData />
        <NewDealFormWithDispatch />
      </div>
    );
  }
}

export default App;
