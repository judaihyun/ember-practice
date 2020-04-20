import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';



module('Unit | Service | firebase | firestore', function(hooks) {
  setupTest(hooks);
  
  
  test('should be init', function(assert){
    const fb = this.owner.lookup('service:firebase');
    assert.equal(fb.store.XT, '[DEFAULT]');
    fb.firebaseApp.delete();
    fb.store.terminate();
  });
   
  /*
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
  
  */

  test('should be read', async function(assert){
    const fb = this.owner.lookup('service:firebase');
    
    let ret = await fb.store.collection("TEST").doc('MYDOC')
    .get()
    .then(q=>{
      console.log(q.data());
      
    });
    fb.firebaseApp.delete();
    fb.store.terminate();
    assert.ok(1);
    
  });


});
