import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import rootReducer from './redux/rootReducer'
import './index.css';
import App from './App';
const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log(store.getState());
// store.dispatch({ type: "INCREMENT_COUNTER" });
// console.log(store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

