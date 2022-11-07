import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
// import {createStore} from 'redux'
// import {Provider} from 'react-redux'
// import {composeWithDevTools} from 'redux-devtools-extension'
// import rootReducer from './reducers'

// const store = createStore(rootReducer,composeWithDevTools())

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
