import Service from '@ember/service';
import ENV from 'my-rentals/config/environment';
import * as firebase from 'firebase/app';
import 'firebase/firestore';



export default class FirebaseService extends Service {
	items = {};
	
	constructor(){
		super(...arguments)
		this.firebaseApp = firebase.initializeApp(ENV.firebaseConfig);
		this.store = this.firebaseApp.firestore();
	}


	getRent(param){
		var result = this.store.collection("rentals").doc(param).get();
		return result;
	}

	getAll(){
		var result = this.store.collection("rentals").get();
		return result;
	}
}
