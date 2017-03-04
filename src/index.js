import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

// Downwards data flow - the most parent component responsable for fetching it.

const createStoreWithMiddleware = applyMiddleware()(createStore);

// Take this component's generated HTML and put it on the page (in the DOM)
// React is used to create and manage our components
// While ReactDom is used to interact with the DOM.
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
