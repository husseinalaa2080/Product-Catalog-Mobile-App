import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native'
import React from 'react'
import { IMAGES } from '../../../Common/images'
import LinearGradient from 'react-native-linear-gradient'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const ProductDetails = (props) => {
  const {item} = props.route.params
  
  return (
    <View style={styles.mainView}>
      <LinearGradient
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 0}} 
        colors={['#36293f', '#7f5c9c']}
        style={styles.main}
        >
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          >
          <Image 
            source={IMAGES.back}
            resizeMode='contain'
            style={styles.back}
            />
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.container}>
        <Text style={styles.desc}>{item.description}</Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  mainView : {
    flex : 1
  },
  main : {
    height : hp('7.5%'),
    justifyContent : 'center'
  },
  back : {
    height : wp('7.5%'),
    width : wp('7.5%'),
    marginLeft : wp('2.5%')
  },
  container : {
    marginHorizontal : wp('2.5%')
  },
  desc : {
    color : '#8a8390',
    fontSize : 16,
    fontWeight : '500'
  },
  price : {
    fontSize : 18,
    fontWeight : '700',
    color : '#4c4154'
  }
})