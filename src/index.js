import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers'
import data from './data.json';
import App from './App';

const store = createStore(reducer,data)

ReactDOM.render(
    <Provider store={store}>
      <App  />
    </Provider>,
 document.getElementById('root'));