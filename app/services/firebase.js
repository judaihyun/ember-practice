import Service from '@ember/service';
import ENV from 'my-rentals/config/environment';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseApp = firebase.initializeApp(ENV.firebaseConfig);

export default class FirebaseService extends Service {
	constructor(){
		super(...arguments);
		console.log('firebase service run!');
		console.log(firebaseApp);
		return '';
	}
}
