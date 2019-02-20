import {name as appName} from './app.json';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/HomeScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
});

const App = createAppContainer(MainNavigator);

// AppRegistry.registerComponent('ToDoList', () => ToDoList);
AppRegistry.registerComponent(appName, () => App);



// To install react navigation:
// -yarn add react-navigation@^3.0.0
// -yarn add react-native-gesture-handler
// -react-native link react-native-gesture-handler