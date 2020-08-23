import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';
import * as firebase from 'firebase';

//import { seedDatabase } from './seed';


const config = {
  apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

  // const firebase = window.firebase.initializeApp(config);
  const app = firebase.initializeApp(config);

  //seedDatabase(firebase)

// class Firebase {
//     constructor() {
//       app.initializeApp(config);
//     }
//   }

  ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
  );
