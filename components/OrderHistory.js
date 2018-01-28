import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';

export default class OrderHistory extends Component<{}> {
  static navigationOptions = {
    title: 'Order History',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/orderHistory_r.png')}
        style={[styles.icon,{tintColor: tintColor}]}
      />
    ),
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e67e22',
  },
  icon: {
    width: 24,
    height: 24,
  },
})
