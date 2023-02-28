import firebase from "firebase/app"
import "firebase/auth"

const REACT_APP_FIREBASE_API_KEY ="AIzaSyCeHjPnpq03TNdhrzfcOuVDeRmwuzb1qgM";
const REACT_APP_FIREBASE_AUTH_DOMAIN="psiaapka-dev.firebaseapp.com";
const REACT_APP_FIREBASE_PROJECT_ID="psiaapka-dev";
const REACT_APP_FIREBASE_STORAGE_BUCKET="psiaapka-dev.appspot.com";
const REACT_APP_FIREBASE_MESSAGING_SENDER_ID="547774659671";
const REACT_APP_FIREBASE_APP_ID="1:547774659671:web:09256345264cca1eb1b712";

const app = firebase.initializeApp({
	apiKey: REACT_APP_FIREBASE_API_KEY,
	authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: REACT_APP_FIREBASE_APP_ID,
})

export const auth = app.auth()
export default app