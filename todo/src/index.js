import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&  // React Dev tools
    window.__REDUX_DEVTOOLS_EXTENSION__()   // React Dev tools
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root')
);


