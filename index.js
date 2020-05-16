/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
//import Intro from './src/Scenes/Intro'
//import Home from './src/Scenes/HomeUnsplash'
import Hackaton from './Hackaton'

//AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Intro);//Sliders
//AppRegistry.registerComponent(appName, () => Home);
AppRegistry.registerComponent(appName, () => Hackaton);
