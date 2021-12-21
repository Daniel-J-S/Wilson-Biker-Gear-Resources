import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyDEryo6Y7IuAvUABjamsZhZfNJjHTmK1BQ",
    authDomain: "wilson-biker-gear.firebaseapp.com",
    projectId: "wilson-biker-gear",
    storageBucket: "wilson-biker-gear.appspot.com",
    messagingSenderId: "788176606993",
    databaseURL: "https://wilson-biker-gear-default-rtdb.firebaseio.com",
    appId: "1:788176606993:web:e5f933ea822273c96f5eb0"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const database = firebase.database();

function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

function logout() {
    return auth.signOut();
}

export {
    auth,
    database, 
    login,
    logout
};