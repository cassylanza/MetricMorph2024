/**
 * @format
 */

import "react-native-url-polyfill/auto"
import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Router, Scene } from 'react-native-router-flux';


AppRegistry.registerComponent('main', () => App);
