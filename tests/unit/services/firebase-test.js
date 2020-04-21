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
   
  test('should be add', async function(assert) {
    assert.ok(1);
    const fb = this.owner.lookup('service:firebase');
    let isExist = await fb.store.collection('rental');
    console.log(isExist.limit(1));
    isExist.get().then(q=>{
      console.log(q);
    });

    let rentalsRef = await fb.store.collection("rentals");
    rentalsRef.doc('downtown-charm').set({
      type: "rentals", id: 'downtown-charm',
      attributes:{
        title:'Downtown-charm',
        owner:'Violet Beauregrarde',
        city:'Portland',
        location:{lat:45.5175, lng:-122.6801,},
                "category": "Apartment",
        bedrooms: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg",
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.",
      }
    });
    rentalsRef.doc('urban-living').set({
      type: "rentals", id: 'urban-living',
      attributes: {
        title: "Urban Living",
        owner: "Mike Teavee",
        city: "Seattle",
        location: {
          lat: 47.6062,
          lng: -122.3321
        },
        category: "Condo",
        bedrooms: 1,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg",
        description: "A commuters dream. This rental is within walking distance of 2 bus stops and the Metro."
      }
    });
    rentalsRef.doc('grand-old-mansion').set({
      type: "rentals", id: 'grand-old-mansion',
      attributes:{
        title:'Grand Old Mansion',
        owner:'Veruca Salt',
        city:'San Francisco',
        location:{lat:37.7749, lng:-122.4194,},
        category: "Apartment",
        bedrooms: 3,
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg",
        description: "Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.",
      }
    });
    fb.firebaseApp.delete();
    fb.store.terminate();
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
    const fb = this.owner.lookup('service:firebase');
    
    let ret = await fb.store.collection("rentals").doc('downtown-charm')
    .get()
    .then(q=>{
      console.log(q.data());
    });
    fb.firebaseApp.delete();
    fb.store.terminate();
    assert.ok(1);
    
  });


});
