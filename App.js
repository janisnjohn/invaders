import React, {Component} from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './components/login';
import Game from './components/game';

const Application = StackNavigator({
  Home: { screen: Login },
  Game: { screen: Game }
  }, {
  navigationOptions: {
    header: false,
  },
});

export default class App extends Component <{}> {
  render() {
    return <Application />;
  }
}