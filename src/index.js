import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';
// import app from 'firebase/app';
// import 'firebase/auth';



const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };


  // class Firebase {
  //   constructor() {
  //     app.initializeApp(config);

  //     this.auth = app.auth();
  //   }

//       // *** Auth API ***

//   doCreateUserWithEmailAndPassword = (email, password) =>
//   this.auth.createUserWithEmailAndPassword(email, password);

// doSignInWithEmailAndPassword = (email, password) =>
//   this.auth.signInWithEmailAndPassword(email, password);

// doSignOut = () => this.auth.signOut();

// doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

// doPasswordUpdate = password =>
//   this.auth.currentUser.updatePassword(password);
//   }

//   export default Firebase;

const firebase = window.firebase.initializeApp(config);

console.log(window.firebase);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);
