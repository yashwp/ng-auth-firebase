import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;

  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = this.firebaseAuth.authState;
  }

  signInWithTwitter() {
    return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  signInWithFacebook() {
    return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  signInWithGitHub() {
    return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider());
  }

  signInWithGoogle() {
    return this.firebaseAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
