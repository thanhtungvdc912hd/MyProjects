import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

export default class Authentication extends Component<{}> {
  static navigationOptions = ({
    headerRight: <Button title="Info"/>

  })
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
      <Text>Hello, {params.username}</Text>
        <Button
          onPress={() => navigate('OrderHistory')}
          title="Go to OrderHistory"
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
    backgroundColor: '#9b59b6',
  }
})
