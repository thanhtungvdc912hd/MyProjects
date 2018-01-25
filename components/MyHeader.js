import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';

export default class MyHeader extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerText}>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DrawerOpen')}}>
            <Image source={require("../images/menu2.png")} style={styles.icon}/>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Restaurant</Text>
          <Image source={require("../images/logo.png")} style={styles.icon}/>
        </View>
        <TextInput style={styles.textSearch}
          placeholder = "What do you want to eat?"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2ecc71',
    flex: 0.1,
    padding: 5,
    justifyContent: 'space-around'
  },
  headerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  headerSearch: {
    alignItems: 'center'
  },
  headerTitle: {
    color: 'white',
    fontFamily: 'Avenir',
    fontSize: 15
  },
  icon: {
    width: 24,
    height: 24,
  },
  textSearch: {
    paddingLeft: 10,
    marginTop: 15,
    height: 25,
    backgroundColor: 'white',
  },
})
