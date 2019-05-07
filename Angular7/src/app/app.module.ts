import { AllCustomerComponent } from './customer/all/allcustomer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ChartService } from './services/chart.service';
import { CustomerService } from './services/customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './partials/sidenav/navbar.component';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';
import { CustomerComponent } from './customer/new/customer.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { TopnavComponent } from './partials/topnav/topnav.component';




@NgModule({
  // Add newly created components in declarations
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    CustomerComponent,
    TopnavComponent,
    DashboardComponent,
    AllCustomerComponent,



  ],
  // Add External NPM packages references in imports
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  // Add services in Providers
  providers: [
    CustomerService,
    ChartService,
    UserService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
