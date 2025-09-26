import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './Routes.js';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
};

/*class reactTutorialApp extends Component {
  render() {
    return (
      <Routes />
    )
  }
}
export default reactTutorialApp*/
AppRegistry.registerComponent('App', () => App)
