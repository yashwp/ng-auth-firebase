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
