// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDeIqPW3xJ9YsFmhULXxnDwNb-4Lh8vdlE",
    authDomain: "slackclone-3b51f.firebaseapp.com",
    projectId: "slackclone-3b51f",
    storageBucket: "slackclone-3b51f.appspot.com",
    messagingSenderId: "902893110555",
    appId: "1:902893110555:web:88197c954acf30cc7effbe",
    measurementId: "G-T6S9TYCKN6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  // access database
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider, db }