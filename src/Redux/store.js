import AsyncStorage from "@react-native-community/async-storage";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './reducers/rootReducer'
const persistConfig = {
    key: 'root',
    storage : AsyncStorage,
}

const persist_reducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persist_reducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export {store, persistor}