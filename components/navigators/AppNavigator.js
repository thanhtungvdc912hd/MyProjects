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
import Restaurants from "./components/Restaurants"
import Orders from "./components/Orders"
import Foods from "./components/Foods"


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
  Restaurants: { screen: Restaurants},
  Foods: { screen: Foods},

})

const MyMenu = DrawerNavigator({
  Main: { screen: SimpleApp },

},{
  contentComponent: props =>
  <SlideMenu {...props}/>
})

export default class AppNavigator extends Component<{}> {
  render() {
    return <MyMenu/>
  }
}
