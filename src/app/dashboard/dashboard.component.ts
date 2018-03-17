import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  employees: Observable<any[]>;
  employee = {
    name: '',
    age: 0,
    isActive: true,
    dob: new Date()
  };

  constructor(private authService: AuthService,
              private db: AngularFirestore) {
    this.employees = db.collection('/employees').valueChanges();
  }

  ngOnInit() {
    // this.addEmployee();
  }

  addEmployee() {
    this.db.collection('/employees').add(this.employee);
  }
  signout() {
    this.authService.logout();
    localStorage.clear();
  }

}
