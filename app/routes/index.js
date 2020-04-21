import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
const COMMUNITY_CATEGORIES = [
  'Condo',
  'Townhouse',
  'Apartment'
];
export default class IndexRoute extends Route{
	@service('firebase') fb;

	async model(){
		let arr = [];
		let ret = await this.fb.store.collection("rentals")
			.get()
			.then(q=>{
				q.forEach(function(doc){
					arr.push(doc.data());
				})
			});

			/*
		this.store.findRecord('rentals', 'grand-old-mansion').then(
			i=>{
				console.log(i);
			}
		);

		this.store.findAll('rentals').then(i=>{
				console.log(i);
		})
		*/
	

		return arr.map(i=>{
			let {id, attributes } = i;
			let type;
			if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        		type = 'Community';
      		} else {
       			type = 'Standalone';
      		}
			return {id,type,...attributes}
		});
	}
}	
	