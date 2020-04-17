import Service from '@ember/service';
import ENV from 'ember-practice/config/environment';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseApp = firebase.initializeApp(ENV.firebaseConfig);

export default class FirebaseService extends Service {

}
