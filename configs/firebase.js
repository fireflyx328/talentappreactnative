import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyDE0QEpgtkMDNLsSe0LzMTXIEh57BjrM7M",
	authDomain: "reactnativeprojectt.firebaseapp.com",
	databaseURL: "https://reactnativeprojectt.firebaseio.com",
	projectId: "reactnativeprojectt",
	storageBucket: "reactnativeprojectt.appspot.com",
	messagingSenderId: "948287625705"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

export {firebaseDB};