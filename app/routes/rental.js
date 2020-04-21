import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RentalRoute extends Route {
	@service firebase;
	async model({rental_id}){
		console.log('rental.js');
		console.log(rental_id);

		let result = await this.firebase.getRent(rental_id);
		let { attributes, id, type} = result;

		console.log(result);
		return { id, type, ...attributes};
		//console.log(t);
		/*
		t.then(i=>{
			console.log(this.firebase.items);
			return this.firebase.items;
		});
		*/
		


		/*
		this.store.findRecord('rentals', rental_id).then(
			i=>{
				console.log(i);
			}
		);


		this.store.findAll('rentals').then(i=>{
				console.log(i);
		})
		*/
	
	//	return this.store.find('rental', rental_id);
	}

}