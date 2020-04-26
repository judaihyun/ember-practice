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

		let ret = await this.fb.getAll();
		ret.forEach(function(doc){
			arr.push(doc.data());
			console.log(doc.data());
		});

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
	