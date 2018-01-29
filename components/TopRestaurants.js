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
import Restaurant from './Restaurant'

export default class TopRestaurants extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Top Restaurants</Text>
        </View>
        <Restaurant navigate={this.props.navigate}/>
        <Restaurant navigate={this.props.navigate}/>
        <Restaurant navigate={this.props.navigate}/>
        <Restaurant navigate={this.props.navigate}/>
        <Restaurant navigate={this.props.navigate}/>
        <Restaurant navigate={this.props.navigate}/>
        <Restaurant navigate={this.props.navigate}/>
        <Restaurant navigate={this.props.navigate}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a5d6a7',
    margin: 2,
    shadowColor: '#2E272B',
    shadowOpacity: 1
  },
  title: {
    fontSize: 20,
    color: "#0c2461"
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  }
})
