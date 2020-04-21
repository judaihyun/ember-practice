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


	async getRent(param){
		var result = await this.store.collection("rentals").doc(param)
		.get()
		.then(q=> q.data() );
		
		return result;
	}
}
