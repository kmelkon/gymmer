import { combineReducers } from 'redux'
import workoutsReducer from './workoutsReducer'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

export default combineReducers({
  workouts: workoutsReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})
