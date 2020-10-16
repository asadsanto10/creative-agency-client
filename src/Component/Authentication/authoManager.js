// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import firebaseConfig from '../FirebaseConfig';


// initialize
export const initializeFirebase = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

// google sign in 
export const handelGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)

    .then(res => {
        const {displayName, email, photoURL}= res.user;
        const signInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        sucess: true
    }
    setToken();
    return signInUser;
    })
    .catch(error => {
    const newUserInfo = {};
    newUserInfo.error = error.message;
    newUserInfo.sucess = false;
    return newUserInfo;
    })
}

// set tokien 
const setToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        sessionStorage.setItem('token', idToken);
    }).catch(function (error) {
        // Handle error
    });
}

