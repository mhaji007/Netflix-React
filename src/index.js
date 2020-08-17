import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: "AIzaSyBjplLo7-gjsKqx_yb6vhJhSMOsASBtZOE",
    authDomain: "netflix-react-a95b8.firebaseapp.com",
    databaseURL: "https://netflix-react-a95b8.firebaseio.com",
    projectId: "netflix-react-a95b8",
    storageBucket: "netflix-react-a95b8.appspot.com",
    messagingSenderId: "64208235344",
    appId: "1:64208235344:web:ef504c6996a8d7c6d65a55",
    measurementId: "G-KDKJX9QYGN"
}

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <>
        <FirebaseContext.Provider value={{ firebase: window.firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);
