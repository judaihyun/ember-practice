
import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = [
	'Condo',
	'Townhouse',
	'Apartment'
];

export default class IndexRoute extends Route{
	async model(){
		let response = await fetch('/api/rentals.json');
		let { data } = await response.json();

		return data.map(model => {
			let { attributes } = model;
			let type;

			if(COMMUNITY_CATEGORIES.includes(attributes.type)){
				type = 'Community';
			}else{
				type = 'Standalone';
			}

			return { type, ...attributes};
		})
	}
}