import { View, Text } from 'react-native'
import React from 'react'
import StackNavigator from './src/Navigation/StackNavigator'
import { Provider } from 'react-redux'
import { persistor, store } from './src/Redux/store'
import { PersistGate } from 'redux-persist/integration/react'
const App = () => {
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackNavigator />
      </PersistGate>
    </Provider>
  )
}

export default App