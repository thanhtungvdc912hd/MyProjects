import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import Swiper from 'react-native-swiper'
export default class Promotions extends Component<{}> {
  render() {

    return (
      <View style={styles.container}>
        <Swiper autoplay={true} >
          <View style={styles.slide1}>
            <TouchableOpacity onPress={()=>{this.props.navigate('PromotionDetail')}}>
              <Image source={require("../images/voucher1.png")} style={styles.voucher}/>
            </TouchableOpacity>
          </View>
          <View style={styles.slide2}>
            <TouchableOpacity onPress={()=>{this.props.navigate('PromotionDetail')}}>
              <Image source={require("../images/voucher2.png")} style={styles.voucher}/>
            </TouchableOpacity>
          </View>
          <View style={styles.slide3}>
            <TouchableOpacity onPress={()=>{this.props.navigate('PromotionDetail')}}>
              <Image source={require("../images/voucher1.png")} style={styles.voucher}/>
            </TouchableOpacity>
          </View>
        </Swiper>
      </View>
    );
  }
}
const restauWidth= 360
const restauHeight= restauWidth * 460 /1104
const styles = StyleSheet.create({
  container: {
    margin: 2,
    height: 200,
    backgroundColor: '#a5d6a7'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  voucher: {
    height: restauHeight,
    width: restauWidth
  }
})
