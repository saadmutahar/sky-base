import App from './app/index';

export default App;

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Index from './app/index';

AppRegistry.registerComponent('Sky', () => App);
