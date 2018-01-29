import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

import Main from "./components/Main"
import Authentication from "./components/Authentication"
import OrderHistory from "./components/OrderHistory"
import MyInfo from "./components/MyInfo"
import SlideMenu from "./components/SlideMenu"
import MyHeader from "./components/MyHeader"
import RestaurantDetail from "./components/RestaurantDetail"
import PromotionDetail from "./components/PromotionDetail"
import Restaurant from "./components/Restaurant"


// Manifest of possible screens
const MyTabNavigator = TabNavigator({
  Main: { screen: Main },
},
{
  // Default config for all screens
  tabBarOptions: {
    activeTintColor: '#e91e63',
    showLabel: false,

  }
})

const SimpleApp = StackNavigator({
  MyMain: { screen: MyTabNavigator},
  Authentication: { screen: Authentication },
  MyInfo: { screen: MyInfo },
  OrderHistory: { screen: OrderHistory },
  PromotionDetail: { screen: PromotionDetail },
  RestaurantDetail: { screen: RestaurantDetail },
  Restaurant: { screen: Restaurant},

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
