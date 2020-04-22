// Cloud Functions과 triggre setup을 위한 Firebase SDK
const functions = require('firebase-functions');

// The FIrebase Admin to access (realtimeDB or firestore)
const admin = require('firebase-admin');
admin.initializeApp({
	credential: admin.credential.applicationDefault(),
	databaseURL: "https://my-firest-66bb6.firebaseio.com"
});


exports.addMessage = functions.https.onRequest(async (req, res) => {
	const store = admin.firestore();

	res.redirect(303, 'test : '+req.query);
 
});

exports.selectAll = functions.https.onRequest(async (req, res) => {
	const store = admin.firestore();
	console.log(req);
	const original = req.query.text;
	console.log(original);

	const result = await store.collection('rentals').doc(original)
	.get();
	res.json({result: result.data()});
})

exports.hellow = (req,res) => {
	let message = req.query.message || req.body.message || 'Hello!!';
	res.status(200).send(message);
};


