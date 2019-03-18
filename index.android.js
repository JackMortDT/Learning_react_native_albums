// Import a library to hel create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
  <Header />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);