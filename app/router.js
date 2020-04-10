import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
	this.route('about');
	
	// Custom Paths : getting-in-touch를 contact.hbs로 ..
	this.route('contact', { path: '/getting-in-touch'});

});
