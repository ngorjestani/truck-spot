import firebase from "firebase";

class User {
    constructor(firebaseUser?: firebase.User) {
        let displayName = '';
        let email = '';
        let photoURL = '';


        let uid = '';

        if (firebaseUser) {
            displayName = firebaseUser.displayName ? firebaseUser.displayName : '';
            email = firebaseUser.email ? firebaseUser.email : '';
            photoURL = firebaseUser.photoURL ? firebaseUser.photoURL : '';
            uid = firebaseUser.uid ? firebaseUser.uid : '';
        }
    }
}

export default User;