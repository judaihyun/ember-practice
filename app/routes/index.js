import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route{
	@service('firebase') fb;

	async model(){
		const store = this.fb.store; 

		let ret = await store.collection("TEST").doc('MYDOC')
			.get()
			.then(q=>{
				console.log(q.data());
			});
		return ret;
	}
}	
	