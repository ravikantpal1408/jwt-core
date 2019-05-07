import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'http://localhost:5000/api';


  loginFormModel = this.fb.group({
    UserName: ['', Validators.required],
    Password: ['', Validators.required],
  });


  formModel = this.fb.group({
    UserName: ['', [Validators.required, this.checkIdForMe.bind(this)]],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    const confirmPswrdCtrl = fb.get('ConfirmPassword');
    // passwordMismatch
    // confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {

      if (fb.get('Password').value != confirmPswrdCtrl.value) {
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }

  register() {
    const body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password
    };
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
        // console.log('helo')
        this.http.get(this.BaseURI + '/ApplicationUser/GetUserByEmail?loginId='+ fb.value).subscribe((data: any)=>{
          // console.log(data);
          if(data.message != 'Not Found'){
            fb.setErrors({ loginIdExist: true });
          }
          else{
            fb.setErrors(null);

          }
        });
      }

    }

  }
}
