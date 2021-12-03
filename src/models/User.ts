import firebase from "firebase";

class User {
    displayName: string;
    email: string;
    photoURL: string;
    uid: string;

    constructor(firebaseUser?: firebase.User) {
        this.displayName = '';
        this.email = '';
        this.photoURL = '';
        this.uid = '';

        if (firebaseUser) {
            this.displayName = firebaseUser.displayName ? firebaseUser.displayName : '';
            this.email = firebaseUser.email ? firebaseUser.email : '';
            this.photoURL = firebaseUser.photoURL ? firebaseUser.photoURL : '';
            this.uid = firebaseUser.uid ? firebaseUser.uid : '';
        }
    }
}

export default User;