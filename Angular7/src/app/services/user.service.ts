import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:5000/api';

  testBool: boolean;

  loginFormModel = this.fb.group({
    UserName: ['', Validators.required],
    Password: ['', Validators.required],
  });


  register(formModel: any) {
    console.log(formModel);


    const body = {
      UserName: formModel.UserName,
      Email: formModel.Email,
      FullName: formModel.FullName,
      Password:  formModel.Passwords.Password
    };
    console.log('body',body)
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile');
  }



  getUserByEmail(username: string){
    return this.http.get(this.BaseURI + '/ApplicationUser/GetUserByEmail?loginId='+ username);
  }

  checkIdForMe(fb: FormControl){
    // console.log(fb.value)
    if(fb.value!=null){
      if( fb.value != ''){
        console.log('helo')
        return this.http.get(this.BaseURI + '/ApplicationUser/GetUserByEmail?loginId='+ fb.value)

      }

    }

  }
}
