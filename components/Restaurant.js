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

export default class Restaurant extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.restauContainer}>
          <View style={styles.restauStyle}>
            <View style={styles.restauImage}>
              <TouchableOpacity onPress={()=>{this.props.navigate('RestaurantDetail')}}>
                <Image source={require("../images/r2.jpg")} style={styles.image}/>
              </TouchableOpacity>
            </View>
            <View style={styles.restauInfo}>
              <View style={styles.restauInfoTool}>
                  <View style={{justifyContent: 'center'}}>
                    <Text style={styles.txtRestauName}>BB' House Restaurant</Text>
                  </View>
                  <View style={styles.restauInfoTool}>
                    <View>
                      <TouchableOpacity onPress={()=>{this.props.navigate('RestaurantDetail')}}>
                        <Image source={require("../images/info.png")} style={styles.icon}/>
                      </TouchableOpacity>
                    </View>
                    <View>
                      <Image source={require("../images/reserve.png")} style={styles.icon}/>
                    </View>
                    <View>
                      <Image source={require("../images/order.png")} style={styles.icon}/>
                    </View>
                  </View>
              </View>

              <Text  style={styles.txtAddress}>376/42 Nguyen Dinh Chieu, Phuong 4, Quan 3, TP Ho Chi Minh</Text>
              <View style={{flexDirection: 'row'}}>
                <Image source={require("../images/time.png")} style={styles.icon}/>
                <View style={{justifyContent: 'center', paddingLeft:10 }}>
                  <Text style={{fontSize: 10}}>7H - 23H</Text>
                </View>
              </View>

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
    backgroundColor: '#a5d6a7',
    margin: 2,
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
    borderTopWidth: 1,
    borderTopColor: '#95a5a6',
    paddingTop: 10
  },
  image: {
    height: restauHeight,
    width: restauWidth
  },
  restauImage: {
    paddingRight : 10
  },
  restauInfo: {
    flex: 1,
    justifyContent: 'space-between'
  },
  restauInfoTool: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingRight: 5
  },
  icon: {
    width: 20,
    height: 20,
  },
  txtAddress: {
    color: '#7f8c8d',
    fontSize: 10,
    fontFamily: 'Avenir'
  },
  txtRestauName: {
    color: '#30336b',
    fontSize: 15,
    fontFamily: 'Avenir',
    fontWeight: 'bold'
  }
})
