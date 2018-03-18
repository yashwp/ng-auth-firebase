import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;


  constructor(private firebaseAuth: AngularFireAuth,
              private router: Router) {
    this.user = this.firebaseAuth.authState;
    if (this.user) {
      this.user.subscribe((user) => {
        if (user) {
          this.userDetails = user;
        }
      });
    }
  }

  getProfile() {
    return this.userDetails;
  }

  signInRegular(obj: {email, pass}) {
    const credential = firebase.auth.EmailAuthProvider.credential(obj.email, obj.pass);
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(obj.email, obj.pass);
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

  isLoggedIn() {
    return !!this.userDetails;
  }

  logout() {
    this.firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']))
      .catch((err) => console.log(err));
  }

}
