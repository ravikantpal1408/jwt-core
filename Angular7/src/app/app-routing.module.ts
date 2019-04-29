import { CustomerComponent } from './customer/customer.component';
import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: 'home', component: HomeComponent, children: [
      { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard]}
  ]},
  // { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
