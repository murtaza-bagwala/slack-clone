import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD5VpXkSwzkT7HAVPVd372DYZLDp3lJcss",
	authDomain: "slack-clone-cdd6d.firebaseapp.com",
	databaseURL: "https://slack-clone-cdd6d.firebaseio.com",
	projectId: "slack-clone-cdd6d",
	storageBucket: "slack-clone-cdd6d.appspot.com",
	messagingSenderId: "844081649201",
	appId: "1:844081649201:web:43eedaf30fa7e54404e710",
	measurementId: "G-CSY9Y0FCCS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

