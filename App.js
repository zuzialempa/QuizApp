import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './screens/Home.js';
import TrueFalse from './screens/TrueFalse.js';
const MainNavigator = createStackNavigator({
  Home: Home,
  TrueFalse: TrueFalse
}, {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}