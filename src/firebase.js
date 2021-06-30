import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCrT8Gpb8bcF2icybSgIqKdxL0iAITK0u8",
    authDomain: "imessage-clone-320e9.firebaseapp.com",
    projectId: "imessage-clone-320e9",
    storageBucket: "imessage-clone-320e9.appspot.com",
    messagingSenderId: "151954360950",
    appId: "1:151954360950:web:04aaf8ee968a0d3361ed57",
    measurementId: "G-ZG5GLEXNP2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;