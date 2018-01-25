import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';

import MyHeader from "./MyHeader"

const MenuButton = (props) => (
  <TouchableOpacity onPress={()=>{props.navigation.navigate('DrawerOpen')}}>
    <Image source={require("../images/menu.png")} style={styles.icon}/>
  </TouchableOpacity>
)

export default class Main extends Component<{}> {
  static navigationOptions = ({navigation, screenProps, title}) => ({
    header: <MyHeader navigation = {navigation}/>,
    headerLeft:<MenuButton navigation = {navigation}/>,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/home_r.png')}
        style={[styles.icon,{tintColor: tintColor}]}
      />
    ),
  })


  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>
        <StatusBar hidden = {true}/>
        <Button
          onPress={() => navigate('Authentication',{username: 'Tung'})}
          title="Go to Authentication"
        />
        <Button
          onPress={() => navigate('OrderHistory')}
          title="Go to OrderHistory"
        />
        <Button
          onPress={() => navigate('MyInfo')}
          title="Go to MyInfo"
        />
        <Button
          onPress={() => navigate('DrawerOpen')}
          title="Go to DrawerOpen"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
  },

  icon: {
    width: 24,
    height: 24,
  },

})
