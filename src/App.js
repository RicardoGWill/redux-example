// There are 3 main files for this Redux project, namely...
// 1) App.js: This component. Note: <Provider store={store}><Counter/></Provider>
// 2) Counter.js: Has the main component layout and methods.
// 3) index.js (inside the "store" folder): Sets up the "Reducer" and "Store".

import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux'
import Counter from './Counter';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Counter/>
        </Provider>
      </div>
    );
  }
}

export default App;
