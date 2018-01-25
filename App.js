import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
import { Animated, Easing, Text, View } from 'react-native';

import Main from "./components/Main"
import Authentication from "./components/Authentication"
import OrderHistory from "./components/OrderHistory"
import MyInfo from "./components/MyInfo"
import SlideMenu from "./components/SlideMenu"
import Menu2 from "./components/Menu2"

// Manifest of possible screens
const MyTabNavigator = TabNavigator({
  Main: { screen: Main },
  MyInfo: { screen: MyInfo },
  OrderHistory: { screen: OrderHistory },
},
{
  // Default config for all screens
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showLabel: false

  }
})

const SimpleApp = StackNavigator({
  MyMain: { screen: MyTabNavigator},
  Authentication: { screen: Authentication },
})

const MyMenu = DrawerNavigator({
  Main: { screen: SimpleApp },

},{
  contentComponent: props =>
  <SlideMenu {...props}/>
})

export default class App extends Component<{}> {
  render() {
    return <MyMenu/>
  }
}
