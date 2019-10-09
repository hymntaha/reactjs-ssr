// Startup point for the client side application
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import Routes from './Routes';
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from 'react-redux';

ReactDom.hydrate(
  <BrowserRouter>
    <Routes/>
  </BrowserRouter>
  , document.querySelector('#root'));

