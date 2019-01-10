// This component (within the "store" folder) creates the REDUCER and the STORE.

import { createStore } from 'redux';

// This is an object that gives the initial count,
// which is later changed by the REDUCER below.
const initialState = {
  count: 0
};

// This is the REDUCER, which is responsible for changing the state.
// The underlying state remains, I believe, but a new object is assigned,
// which acts as the changed state.
const reducer = (state = initialState, action) => {
  console.log("This is the REDUCER and it is running.", action);

  switch(action.type) {
    // Note that if there is a "return", there does not need to be a "break".
    case "INCREMENT":
      return Object.assign({}, state, {count: state.count + 1});
    // case "DECREMENT":
    //   return Object.assign({}, state, {count: state.count - 1});
    default:
      return state;
  }
};

// The store is created, with the "reducer" passed in as the parameter/argument.
const store = createStore(reducer);

export default store;
