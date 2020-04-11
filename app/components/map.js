import Component from '@glimmer/component';
import ENV from 'my-rentals/config/environment';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class MapComponent extends Component {
	get src(){
		let {lng,lat,width,height,zoom} = this.args;
		let coordinates = `${lng},${lat},${zoom}`;
		let dimen = `${width}x${height}`;
		let accessToken = `access_token=${this.token}`;

		return `${MAPBOX_API}/${coordinates}/${dimen}@2x?${accessToken}`
	}
	get token() {
		return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
	}
}
