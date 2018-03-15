import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  twitterLogin() {
    this.authService.signInWithTwitter().then((res: any) => {
      console.log(res);
      this.router.navigate(['dashboard']);
      localStorage.setItem('token', res.credential.accessToken);
    })
      .catch((err) => console.log(err));
  }

  fbLogin() {
    this.authService.signInWithFacebook()
      .then((res) => {
        this.router.navigate(['dashboard']);
        localStorage.setItem('token', res.credential.accessToken);

      })
      .catch((err) => console.log(err));
  }

  gitLogin() {
    this.authService.signInWithGitHub()
      .then((res) => {
        console.log(res);
        this.router.navigate(['dashboard']);
        localStorage.setItem('token', res.credential.accessToken);

      })
      .catch((err) => console.log(err));
  }

  googleLogin() {
    this.authService.signInWithGoogle()
      .then((res) => {
        console.log(res);
        this.router.navigate(['dashboard']);
        localStorage.setItem('token', res.credential.accessToken);

      })
      .catch((err) => console.log(err));
  }

}
