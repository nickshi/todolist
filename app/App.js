/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import configureStore from './stores/configureStore';
import { Provider } from 'react-redux';
import Home from './containers/Home';

const store = configureStore();

const app = () => (
  <Provider store={store}>
    <Home/>
  </Provider>
);

export default app;