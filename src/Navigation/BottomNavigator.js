import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import {Text, Image, View} from 'react-native'
import { useSelector } from 'react-redux'
import { IMAGES } from '../Common/images'
import Catalogue from '../Screens/Catalogue/Catalogue'
import Favorite from '../Screens/Favorite/Favorite'
import Home from '../Screens/Home/Home'
import Profile from '../Screens/Profile/Profile'
import styles from './BNStyles'
import CatalogueNavigator from './CatalogueNavigator'


const Tab = createBottomTabNavigator()

const BottomTabs = () => {

    const favContainer = useSelector(
        state => state.favCounter.favoriteCount
    )

    return(
        <Tab.Navigator
            initialRouteName='CatalogueNavigator'
            screenOptions={{
                tabBarStyle : styles.tapStyles,
            }}>
            <Tab.Screen 
                name='Home'
                component={Home}
                options={{
                    headerShown : false,
                    tabBarLabel : ({focused, color, size}) => {
                        return(
                            <Text style={[styles.label, focused ? styles.activeLabel : null]}>Home</Text>
                        )
                    },
                    tabBarIcon: ({focused, color, size}) => {
                    return focused ? (
                        <Image
                            source={IMAGES.activeHome}
                            resizeMode='contain'
                            style={styles.img}
                        />
                    ) : (
                        <Image
                            source={IMAGES.home}
                            resizeMode='contain'
                            style={styles.img}
                        />
                    )
                    },
                }}/>
            <Tab.Screen 
                name='CatalogueNavigator'
                component={CatalogueNavigator}
                options={{
                    headerShown : false,
                    tabBarLabel : ({focused, color, size}) => {
                        return(
                            <Text style={[styles.label, focused ? styles.activeLabel : null]}>Catalogue</Text>
                        )
                    },
                    tabBarIcon: ({focused, color, size}) => {
                    return focused ? (
                        <Image
                            source={IMAGES.activeTile}
                            resizeMode='contain'
                            style={styles.img}
                        />
                    ) : (
                        <Image
                            source={IMAGES.tile}
                            resizeMode='contain'
                            style={styles.img}
                        />
                    )
                    },
                }}/>
            <Tab.Screen 
                name='Favorite'
                component={Favorite}
                options={{
                    headerShown : false,
                    tabBarLabel : ({focused, color, size}) => {
                        return(
                            <Text style={[styles.label, focused ? styles.activeLabel : null]}>Favorite</Text>
                        )
                    },
                    tabBarIcon: ({focused, color, size}) => {
                    return focused ? (
                        <View>
                            <Image
                                source={IMAGES.heartTab}
                                resizeMode='contain'
                                style={styles.img}
                                />
                            {favContainer === 0 ? null :
                            <View style={styles.favContainer}>
                                <Text style={styles.favText}>{favContainer}</Text>
                            </View>}
                        </View>
                        
                    ) : (
                        <View>
                            <Image
                                source={IMAGES.activeHeart}
                                resizeMode='contain'
                                style={styles.img}
                            />
                            {favContainer === 0 ? null :
                            <View style={styles.favContainer}>
                                <Text style={styles.favText}>{favContainer}</Text>
                            </View>}
                        </View>
                        
                    )
                    },
                }}/>
            <Tab.Screen 
                name='Profile'
                component={Profile}
                options={{
                    headerShown : false,
                    tabBarLabel : ({focused, color, size}) => {
                        return(
                            <Text style={[styles.label, focused ? styles.activeLabel : null]}>Profile</Text>
                        )
                    },
                    tabBarIcon: ({focused, color, size}) => {
                    return focused ? (
                        <Image
                            source={IMAGES.activeUser}
                            resizeMode='contain'
                            style={styles.img}
                        />
                    ) : (
                        <Image
                            source={IMAGES.user}
                            resizeMode='contain'
                            style={styles.img}
                        />
                    )
                    },
                }}/>
            
        </Tab.Navigator>
    )
}

export default BottomTabs