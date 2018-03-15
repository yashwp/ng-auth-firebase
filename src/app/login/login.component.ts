import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  user: any = {
    email: '',
    pass: ''
  };

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  credlogin(f: NgForm, isValid: boolean) {
    if (isValid) {
      this.user = {
        email: f.value.email,
        pass: f.value.password
      };
      this.authService.signInRegular(this.user)
        .then((res) => {
            console.log(res);
            this.router.navigate(['dashboard']);
          })
            .catch((err) => console.log('error: ' + err));
    }
  }

  twitterLogin() {
    this.authService.signInWithTwitter().then((res: any) => {
      this.router.navigate(['dashboard']);
      localStorage.setItem('auth_token', res.credential.accessToken);
    })
      .catch((err) => console.log(err));
  }

  fbLogin() {
    this.authService.signInWithFacebook()
      .then((res) => {
        this.router.navigate(['dashboard']);
        localStorage.setItem('auth_token', res.credential.accessToken);

      })
      .catch((err) => console.log(err));
  }

  gitLogin() {
    this.authService.signInWithGitHub()
      .then((res) => {
        this.router.navigate(['dashboard']);
        localStorage.setItem('auth_token', res.credential.accessToken);

      })
      .catch((err) => console.log(err));
  }

  googleLogin() {
    this.authService.signInWithGoogle()
      .then((res) => {
        this.router.navigate(['dashboard']);
        localStorage.setItem('auth_token', res.credential.accessToken);

      })
      .catch((err) => console.log(err));
  }

}
