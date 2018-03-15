import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
