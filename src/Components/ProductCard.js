import {  Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { IMAGES } from '../Common/images'

const ProductCard = (props) => {
    const {item, navigation, onPressHandler } = props
    return(
      <TouchableOpacity 
        onPress={() => navigation.navigate('ProductDetails', {item : item})}
        style={styles.card}>
        <Image 
          source={{uri : item.image}}
          resizeMode='cover'
          style={styles.dummy}/>
        <TouchableOpacity 
          onPress={() => onPressHandler(item.id)}
          style={styles.heartContainer}>
          <Image 
            source={item.selceted ? IMAGES.fav : IMAGES.heart}
            resizeMode='contain'
            style={styles.heart}/>
        </TouchableOpacity>
        <Text
          style={styles.cardDetails}
          numberOfLines={2}>{item.title}</Text>
        <Text style={styles.cardPrice}>${item.price}</Text>
      </TouchableOpacity>
    )
  }

export default ProductCard

const styles = StyleSheet.create({
    card : {
        marginLeft : wp('2.5%'),
        width : wp('46.25%'),
        marginTop : hp('1.5%')
    },
    dummy : {
        width : wp('46.25%'),
        height : hp('20%'),
        borderRadius : 10
    },
    heartContainer : {
        backgroundColor : '#fff',
        width : wp('8%'),
        height : wp('8%'),
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 50,
        marginTop : hp('-2%'),
        marginLeft : wp('35%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    heart : {
        width : wp('5%'),
        height : wp('5%'),
    },
    cardDetails : {
        color : '#9e98a3',
        fontSize : 16,
        fontWeight : '400',
    },
    cardPrice : {
        color : '#41354a',
        fontSize : 20,
        fontWeight : '600'
    }
})