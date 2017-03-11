import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyApIhe6MXyLygAzMn1U-kpAPBzLdNfIrI0',
  authDomain: 'first-flight-with-friend-e8841.firebaseapp.com',
  databaseURL: 'https://first-flight-with-friend-e8841.firebaseio.com',
  storageBucket: 'first-flight-with-friend-e8841.appspot.com',
  messagingSenderId: '565524395149'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
