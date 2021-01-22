import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

// Added all necessary components and libary methods
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers';
import thunk from 'redux-thunk';

const { worker } = require('./mocks/browser');
worker.start();

const rootElement = document.getElementById("root");

// Created a store that includes thunk middleware support
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
// Wrapped the App component in a react-redux Provider element
    <Provider store={store}>

    <App />

</Provider>,
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk middleware support.
//3. Wrap the App component in a react-redux Provider element.