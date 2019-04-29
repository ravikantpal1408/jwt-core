import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class CustomerService {
    constructor(private fb: FormBuilder, private http: HttpClient) { }

    readonly BaseURI = 'http://localhost:5000/api';
    formModel = this.fb.group({
        UserName: ['', Validators.required],
        Email: ['', Validators.email],
        FullName: [''],


      });

      registerCustomer() {
          return this.http.post(this.BaseURI + 'SaveCustomer', '');
      }

}
