import React, { Component } from 'react';
import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';

import Main from "./components/Main"
import Authentication from "./components/Authentication"
import OrderHistories from "./components/OrderHistories"
import MyInfo from "./components/MyInfo"
import SlideMenu from "./components/SlideMenu"
import MyHeader from "./components/MyHeader"
import RestaurantDetail from "./components/RestaurantDetail"
import PromotionDetail from "./components/PromotionDetail"
import Restaurant from "./components/Restaurant"
import Orders from "./components/Orders"


// Manifest of possible screens
const MyTabNavigator = TabNavigator({
  Main: { screen: Main },
  Orders: { screen: Orders },
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
  OrderHistories: { screen: OrderHistories },
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
