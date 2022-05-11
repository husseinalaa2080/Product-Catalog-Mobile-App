import { StyleSheet } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    main : {
        flex : 1,
        backgroundColor : '#f4f3f4'
    },
    header : {
        alignItems : 'center'
    },
    headerText : {
        color : '#fff',
        paddingVertical : hp('2.5%'),
        fontSize : 16,
        fontWeight : '600'
    },
    filter : {
        marginLeft : wp('2.5%'),
        marginTop : hp('1.5%'),
        marginBottom : hp('2.5%'),
        backgroundColor : '#fff',
        height : hp('4%'),
        justifyContent : 'center',
        borderRadius : 30
    },
    filterText : {
        color : '#a9a6ab',
        paddingHorizontal : wp('4%')
    },
    activeTab : {
        backgroundColor : '#e7b944'
    },
    activeText : {
        color : '#fff'
    },
    footer : {
        marginRight : wp('2.5%')
    },
    totalItems : {
        marginLeft : wp('2.5%'),
        color : '#615769',
        fontSize : 18,
        fontWeight : '500',
    },
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

export default styles