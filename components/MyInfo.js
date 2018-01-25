import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';

export default class MyInfo extends Component<{}> {
  static navigationOptions = {
    title: 'You',
    //headerBackTitle: null,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/myInfo_r.png')}
        style={[styles.icon,{tintColor: tintColor}]}
      />
    ),
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('Main')}
          title="Go to Main"
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
    backgroundColor: '#e17055',
  },
  icon: {
    width: 24,
    height: 24,
  },
})
