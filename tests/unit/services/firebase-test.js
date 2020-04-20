import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import ENV from 'my-rentals/config/environment';

module('Unit | Service | firebase | firestore', function(hooks) {
  setupTest(hooks);
  
  
  const firebaseApp = firebase.initializeApp(ENV.firebaseConfig);

  hooks.beforeEach(function(){
  })
  const db = firebaseApp.firestore();
  
  test('should be init', function(assert){
    assert.equal(db.XT, '[DEFAULT]');
  });
  
  test('should be add', async function(assert) {
    assert.ok(1);
    return;
    var result = await db.collection("TEST").doc('time').set({
      first: "Test",
      last: "Lovelace",
      born: 1815,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      assert.ok(1);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
      assert.notOk();
    });
 
  });

  test('should be read', async function(assert){
    
    /*
    let result = await db.collection("TEST").get().then(q => {
        q.forEach(doc=>{
          console.log(`${doc.id} => ${doc.data()}`);
        });
      assert.ok(1);
    });
    */

    let ret = await db.collection("TEST").doc('MYDOC')
                  .get()
                  .then(q=>{
                    console.log(q.data());
                      q.forEach(i=>{
                        console.log(i);
                      })
                  });
    assert.ok(1);

  });


});
