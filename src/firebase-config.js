/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
import { initializeApp } from "firebase/app";


const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE 
  apiKey: "AIzaSyBWwCfb0Wg4AOHYBM26IjTwxbxJ5iI5pTc",
  authDomain: "friendlychat-79704.firebaseapp.com",
  projectId: "friendlychat-79704",
  storageBucket: "friendlychat-79704.appspot.com",
  messagingSenderId: "912448046381",
  appId: "1:912448046381:web:3ca7f5042b54b94ec2ffa4"
  */
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}


// const app = initializeApp(firebaseConfig);
