import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Catalogue from '../Screens/Catalogue/Catalogue';
import ProductDetails from '../Screens/Catalogue/ProductDetails/ProductDetails';

const Stack = createNativeStackNavigator()

const CatalogueNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{headerShown : false}}>
        <Stack.Screen 
          name='Catalogue' component={Catalogue}/>
        <Stack.Screen 
          name='ProductDetails' component={ProductDetails}/>
    </Stack.Navigator>
  )
}

export default CatalogueNavigator