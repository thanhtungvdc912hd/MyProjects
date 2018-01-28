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

export default class TopRestaurants extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Top Restaurants</Text>
      </View>
      <View style={styles.restauContainer}>
        <View style={styles.restauStyle}>
          <View style={styles.imageView}>
            <Image source={require("../images/r2.jpg")} style={styles.image}/>
          </View>
          <View style={styles.contentView}>
            <Text style={{fontWeight: 'bold', fontSize:12 }}>BB's House Restaurant</Text>
            <Text  style={{fontSize: 10 }}>376/42 Nguyen Dinh Chieu, Phuong 4, Quan 3, TP Ho Chi Minh</Text>
            <Text style={{fontSize: 10 }}>Open from 7H - 23H</Text>
            <Text style={{fontSize: 10 }}>Comments</Text>
          </View>
        </View>
        <View style={styles.restauStyle}>
          <View style={styles.imageView}>
            <Image source={require("../images/r2.jpg")} style={styles.image}/>
          </View>
          <View style={styles.contentView}>
            <Text style={{fontWeight: 'bold', fontSize:12 }}>BB's House Restaurant</Text>
            <Text  style={{fontSize: 10 }}>376/42 Nguyen Dinh Chieu, Phuong 4, Quan 3, TP Ho Chi Minh</Text>
            <Text style={{fontSize: 10 }}>Open from 7H - 23H</Text>
            <Text style={{fontSize: 10 }}>Comments</Text>
          </View>
        </View>
        <View style={styles.restauStyle}>
          <View style={styles.imageView}>
            <Image source={require("../images/r2.jpg")} style={styles.image}/>
          </View>
          <View style={styles.contentView}>
            <Text style={{fontWeight: 'bold', fontSize:12 }}>BB's House Restaurant</Text>
            <Text  style={{fontSize: 10 }}>376/42 Nguyen Dinh Chieu, Phuong 4, Quan 3, TP Ho Chi Minh</Text>
            <Text style={{fontSize: 10 }}>Open from 7H - 23H</Text>
            <Text style={{fontSize: 10 }}>Comments</Text>
          </View>
        </View>
        <View style={styles.restauStyle}>
          <View style={styles.imageView}>
            <Image source={require("../images/r2.jpg")} style={styles.image}/>
          </View>
          <View style={styles.contentView}>
            <Text style={{fontWeight: 'bold', fontSize:12 }}>BB's House Restaurant</Text>
            <Text  style={{fontSize: 10 }}>376/42 Nguyen Dinh Chieu, Phuong 4, Quan 3, TP Ho Chi Minh</Text>
            <Text style={{fontSize: 10 }}>Open from 7H - 23H</Text>
            <Text style={{fontSize: 10 }}>Comments</Text>
          </View>
        </View>
        <View style={styles.restauStyle}>
          <View style={styles.imageView}>
            <Image source={require("../images/r2.jpg")} style={styles.image}/>
          </View>
          <View style={styles.contentView}>
            <Text style={{fontWeight: 'bold', fontSize:12 }}>BB's House Restaurant</Text>
            <Text  style={{fontSize: 10 }}>376/42 Nguyen Dinh Chieu, Phuong 4, Quan 3, TP Ho Chi Minh</Text>
            <Text style={{fontSize: 10 }}>Open from 7H - 23H</Text>
            <Text style={{fontSize: 10 }}>Comments</Text>
          </View>
        </View>
        <View style={styles.restauStyle}>
          <View style={styles.imageView}>
            <Image source={require("../images/r2.jpg")} style={styles.image}/>
          </View>
          <View style={styles.contentView}>
            <Text style={{fontWeight: 'bold', fontSize:12 }}>BB's House Restaurant</Text>
            <Text  style={{fontSize: 10 }}>376/42 Nguyen Dinh Chieu, Phuong 4, Quan 3, TP Ho Chi Minh</Text>
            <Text style={{fontSize: 10 }}>Open from 7H - 23H</Text>
            <Text style={{fontSize: 10 }}>Comments</Text>
          </View>
        </View>
        <View style={styles.restauStyle}>
          <View style={styles.imageView}>
            <Image source={require("../images/r3.jpg")} style={styles.image}/>
          </View>
          <View style={styles.contentView}>
            <Text style={{fontWeight: 'bold', fontSize:12 }}>BB's House Restaurant</Text>
            <Text  style={{fontSize: 10 }}>376/42 Nguyen Dinh Chieu, Phuong 4, Quan 3, TP Ho Chi Minh</Text>
            <Text style={{fontSize: 10 }}>Open from 7H - 23H</Text>
            <Text style={{fontSize: 10 }}>Comments</Text>
          </View>
        </View>
      </View>
      </View>
    );
  }
}
const restauWidth= 100
const restauHeight= restauWidth * 640 /960
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8c291',
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
  },
  restauContainer: {
    flex:1,
    justifyContent: 'space-around',
    paddingLeft: 5,
    flexWrap: 'wrap'

  },
  restauStyle: {
    marginBottom: 15,
    flexDirection: 'row',
    borderColor: 'red'
  },
  image: {
    height: restauHeight,
    width: restauWidth
  },
  imageView: {
    paddingRight : 10
  },
  contentView: {
    flex: 1,
    justifyContent: 'space-between'
  }
})
