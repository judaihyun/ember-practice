import Service from '@ember/service';

import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAdBwhIl6rGmY-8wumAqeti6Ct22P8TZlI",
  authDomain: "my-firest-66bb6.firebaseapp.com",
  databaseURL: "https://my-firest-66bb6.firebaseio.com",
  projectId: "my-firest-66bb6",
  storageBucket: "my-firest-66bb6.appspot.com",
  messagingSenderId: "40672420477",
  appId: "1:40672420477:web:705abbee4f1c5e0877c714",
  measurementId: "G-YZM4R4Y0NY",
});

export default class FirebaseService extends Service {
}
