import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

module('Unit | Service | firebase | firestore', function(hooks) {
  setupTest(hooks);

  
  const config = {
      apiKey: "AIzaSyAdBwhIl6rGmY-8wumAqeti6Ct22P8TZlI",
      authDomain: "my-firest-66bb6.firebaseapp.com",
      databaseURL: "https://my-firest-66bb6.firebaseio.com",
      projectId: "my-firest-66bb6",
      storageBucket: "my-firest-66bb6.appspot.com",
      messagingSenderId: "40672420477",
      appId: "1:40672420477:web:705abbee4f1c5e0877c714",
      measurementId: "G-YZM4R4Y0NY",
    };
  
  test('should be add', function(assert) {
    var app = firebase.initializeApp(ENV.firebaseConfig);
    var db = firebase.firestore(app);

    var result = db.collection("users").add({
      first: "Ada",
      last: "Lovelace",
      born: 1815
    })
    .then(function(docRef) {
      console.log(docRef);
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });

    assert.ok(1);
      
  });

});
