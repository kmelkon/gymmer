import firebase from 'firebase'
import '@firebase/firestore'
import '@firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB3_7uxtGdPtVSF4H1zfsh4WTgTPymxmUU',
  authDomain: 'gymmer-9537b.firebaseapp.com',
  databaseURL: 'https://gymmer-9537b.firebaseio.com',
  projectId: 'gymmer-9537b',
  storageBucket: 'gymmer-9537b.appspot.com',
  messagingSenderId: '1080212067772',
  appId: '1:1080212067772:web:ea3c80a00cb854ea9b47b9',
  measurementId: 'G-W5HJZMSBKS',
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
