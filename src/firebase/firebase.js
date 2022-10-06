import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
const firebaseConfig = {
    apiKey: "AIzaSyD-ErFUDGj8SGoDrBDHIEX5na8Inxcedt0",
    authDomain: "vue-projects-694b5.firebaseapp.com",
    projectId: "vue-projects-694b5",
    storageBucket: "vue-projects-694b5.appspot.com",
    messagingSenderId: "1095857465531",
    appId: "1:1095857465531:web:c88396ebc50a7babece19e"
  }

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init firestore service
  const projectauth = firebase.auth()
  const projectFirestore= firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectauth , projectFirestore , timestamp }