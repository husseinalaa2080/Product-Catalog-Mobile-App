import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    tapStyles : { 
        height : hp('7.5%'),
        paddingBottom : hp('3.5%'),
    },
    img : {
        height : hp('3%'),
        width : wp('8%'), 
        // marginBottom : hp('-1%')
    },
    label : {
        fontSize: 13,
        fontWeight: "700",
        fontStyle: "normal",
        letterSpacing: 0.04,
        textAlign: "left",
        color: "#a6a6a6",
        marginBottom : hp('-3%')
    },
    activeLabel : {
        color: "#42324e"
    },
    favContainer : {
        zIndex : 1,
        position : 'absolute',
        // height : wp('5%'),
        // width : wp('5%'),
        backgroundColor : '#f7a330',
        borderRadius : 50,
        alignItems : 'center',
        marginLeft : wp('5%'),
        marginTop : hp('-0.75%')
    },
    favText : {
        paddingHorizontal : wp('2%'),
        paddingVertical : wp('1%'),
        color : '#fff',
        fontSize : 12
    }
})

export default styles