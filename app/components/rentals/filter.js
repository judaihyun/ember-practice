import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

export default class RentalsFilterComponent extends Component{
	@service store;
	get results(){
		let { rentals, query } = this.args;

		if(query){
			rentals = rentals.filter(rental => rental.title.includes(query));
		}

		/*
		console.log('----components/rentals/filter.js----');
		console.log(rentals);
		*/

		return rentals;
	}
}