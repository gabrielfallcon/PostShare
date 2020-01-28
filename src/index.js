import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { Provider } from 'react-redux'

import reducer from './store/reducers/index'
import store from './store'


ReactDOM.render(
    <Provider store={store(reducer)}>
        <App />
    </Provider>
    , document.getElementById('root')
);
