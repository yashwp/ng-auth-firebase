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

}
