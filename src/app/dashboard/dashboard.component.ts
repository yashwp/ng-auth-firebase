import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';
import {GtConfig} from '@angular-generic-table/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  employees: Observable<any[]>;
  public configObject: GtConfig<any> = {
    fields: [],
    settings: [],
    data: []
  };
  employee = {
    name: '',
    age: 0,
    imgUrl: '',
    isActive: true,
    dob: new Date(),
    doj: new Date(),
    email: ''
  };
  me = null;
  selectedEmployee = null;

  constructor(private authService: AuthService,
              private db: AngularFirestore) {
    this.employees = db.collection('/employees').valueChanges();
    this.configObject = {
      settings: [{
        objectKey: 'id',
        sort: 'desc',
        visible: false
      },
      {
        objectKey: 'name',
        sort: 'enable',
        columnOrder: 1
      },
      {
        objectKey: 'email',
        sort: 'enable',
        columnOrder: 2
      },
      {
        objectKey: 'age',
        sort: 'enable',
        columnOrder: 2
      },
      {
          objectKey: 'isActive',
          sort: 'enable',
          columnOrder: 2
      }],
      fields: [{
        name: 'Id',
        objectKey: 'id'
      },
      {
        name: 'Name',
        objectKey: 'name',
        click: (row: any) => {
          this.changeEmployee(row);
        }
      },
      {
        name: 'Email',
        objectKey: 'email',
        click: (row: any) => {
          this.changeEmployee(row);
        }
      },
      {
        name: 'Age',
        objectKey: 'age',
        click: (row: any) => {
          this.changeEmployee(row);
        }
      },
      {
        name: 'Status',
        objectKey: 'isActive',
        click: (row: any) => {
          this.changeEmployee(row);
        },
        render: (row: any) => {
          return row.isActive ? 'Active' : 'In Active';
        }
      }]
    };
  }

  ngOnInit() {
    if (this.employees) {
      this.employees.subscribe((res) => {
        console.log('emp', res);
        this.configObject.data = res;
      });
    }
    setTimeout(() => {
      this.me = this.authService.getProfile();
    }, 1000);
  }

  changeEmployee(emp: any) {
    this.selectedEmployee = {...emp};
    console.log('this.selectedEmployee ', this.selectedEmployee );
  }

  addEmployee() {
    this.db.collection('/employees').add(this.employee);
  }

  signout() {
    this.authService.logout();
    localStorage.clear();
  }

}
