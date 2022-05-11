import { StyleSheet, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const Header = () => {
  return (
    <LinearGradient
        start={{x: 0, y: 0}} 
        end={{x: 1, y: 0}} 
        colors={['#36293f', '#7f5c9c']}
        style={styles.header}>
        <Text style={styles.headerText}>{'Clothing'}</Text>
    </LinearGradient>
  )
}

export default Header

const styles = StyleSheet.create({
    header : {
        alignItems : 'center'
    },
    headerText : {
        color : '#fff',
        paddingVertical : hp('2.5%'),
        fontSize : 16,
        fontWeight : '600'
    },
})
