import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class SocialLoginService {

  constructor(private afAuth: AngularFireAuth ) {}


  googleLogin() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  facebookLogin() {
    return this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
  }


  getLoggedStatement() {
    return this.afAuth.authState.subscribe( res => {
      console.log( res.uid );
      console.log( res.email );
      console.log( res.displayName );
      console.log( res.photoURL );

    });

  }
  firebaseSignOut() {
          firebase.auth().signOut();
    return this.afAuth.auth.signOut();
  }
}
