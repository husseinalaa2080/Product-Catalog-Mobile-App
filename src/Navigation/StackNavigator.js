import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomNavigator';

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown : false}}>
          <Stack.Screen 
            name='BottomTabs' component={BottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator