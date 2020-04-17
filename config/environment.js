'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'my-rentals',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }


  ENV.MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZGhqdSIsImEiOiJjazh3NndtaTgwN3MzM2xvMHJ5MWdmY2Q2In0.eIWiWKFdpU70r1svnM0B9Q';

  ENV.firebaseConfig = {
    apiKey: "AIzaSyAdBwhIl6rGmY-8wumAqeti6Ct22P8TZlI",
    authDomain: "my-firest-66bb6.firebaseapp.com",
    databaseURL: "https://my-firest-66bb6.firebaseio.com",
    projectId: "my-firest-66bb6",
    storageBucket: "my-firest-66bb6.appspot.com",
    messagingSenderId: "40672420477",
    appId: "1:40672420477:web:705abbee4f1c5e0877c714",
    measurementId: "G-YZM4R4Y0NY",
  };

  return ENV;
};
