import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Button
} from 'react-native';

export default class Menu2 extends Component<{}> {
  static navigationOptions = {
    drawerLabel: 'Menu 2',
    drawerIcon: ({ tintColor }) => (
      <Image
        //source={require('./chats-icon.png')}
        style={[styles.icon,{tintColor: tintColor}]}
      />
    ),
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Button
        onPress={() => navigate('DrawerOpen')}
        title="Go to DrawerOpen"
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});
