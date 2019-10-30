import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import combinedReducers from './src/reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

import IndexScreen from './src/screens/IndexScreen'
const firebaseConfig = {
  apiKey: 'AIzaSyB3_7uxtGdPtVSF4H1zfsh4WTgTPymxmUU',
  authDomain: 'gymmer-9537b.firebaseapp.com',
  projectId: 'gymmer-9537b',
  databaseURL: 'https://gymmer-9537b.firebaseio.com',
  storageBucket: 'gymmer-9537b.appspot.com',
  messagingSenderId: '1080212067772',
  appId: '1:1080212067772:web:ea3c80a00cb854ea9b47b9',
  measurementId: 'G-W5HJZMSBKS',
}
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}
firebase.initializeApp(firebaseConfig)
firebase.firestore()

const middlewares = [thunk, logger]

const store = createStore(combinedReducers, compose(applyMiddleware(...middlewares)))
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
}

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Gymmer',
    },
  }
)

const App = createAppContainer(navigator)

export default () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  )
}
