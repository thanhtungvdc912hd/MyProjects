import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView
} from 'react-native';

import MyHeader from "./MyHeader"
import TopRestaurants from "./TopRestaurants"
import Promotions from "./Promotions"

const MenuButton = (props) => (
  <TouchableOpacity onPress={()=>{props.navigation.navigate('DrawerOpen')}}>
    <Image source={require("../images/menu.png")} style={styles.icon}/>
  </TouchableOpacity>
)

export default class Main extends Component<{}> {
  static navigationOptions = ({navigation}) => ({
    header: <MyHeader navigation = {navigation}/>,
    headerLeft:<MenuButton navigation = {navigation}/>,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/home_r.png')}
        style={[styles.icon,{tintColor: tintColor}]}
      />
    )
  })

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <StatusBar hidden={true}/>
        <Promotions navigate={navigate}/>
        <TopRestaurants navigate={navigate}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43a047',
  },

  icon: {
    width: 24,
    height: 24,
  },

})
