import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Button,
  Text,
  TouchableOpacity
} from 'react-native';

export default class SlideMenu extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>Hell</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0984e3',
  }
})
