import { UserService } from "../../services/user.service";
import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styles: []
})
export class RegistrationComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    public service: UserService,
    private toastr: ToastrService
  ) {
    this.successUsernameFlag = false;
  }

  message: string;

  successUsernameFlag: boolean;
  successEmailFlag: boolean;

  formModel = this.fb.group({
    UserName: ["",[Validators.email, Validators.required, this.flagTogglerForUsername.bind(this)]],
    Email: ["", [Validators.email, Validators.required, this.flagTogglerForEmail.bind(this)]],
    FullName: [""],Passwords: this.fb.group(
                                    {
                                          Password: ["", [Validators.required, Validators.minLength(4)]],
                                          ConfirmPassword: ["", Validators.required]
                                    },
                                    { validator: this.comparePasswords })
  });

  comparePasswords(fb: FormGroup) {
    const confirmPswrdCtrl = fb.get("ConfirmPassword");
    // passwordMismatch
    // confirmPswrdCtrl.errors={passwordMismatch:true}
    if (
      confirmPswrdCtrl.errors == null ||
      "passwordMismatch" in confirmPswrdCtrl.errors
    ) {
      if (fb.get("Password").value != confirmPswrdCtrl.value) {
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPswrdCtrl.setErrors(null);
      }
    }
  }

  ngOnInit() {
    this.formModel.reset();
  }


  onSubmit() {
    this.service.register(this.formModel.value).subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.formModel.reset();
          this.toastr.success("New user created!", "Registration successful.");
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case "DuplicateUserName":
                this.toastr.error(
                  "Username is already taken",
                  "Registration failed."
                );
                break;

              default:
                this.toastr.error(element.description, "Registration failed.");
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  checkUsername(usernameCtrl: FormControl) {
    console.log(usernameCtrl);
    this.service.checkIdForMe(usernameCtrl).subscribe((data: any) => {
      console.log(data);
      if (data.message != "Not Found") {
        usernameCtrl.setErrors({ loginIdExist: true });
      } else {
        this.successUsernameFlag = true;
        usernameCtrl.setErrors(null);
      }
    });
  }

  checkEmail(emailCtrl: FormControl) {
    console.log(emailCtrl);
    if(emailCtrl.value==null){
      return
    }
    this.service.checkIdForMe(emailCtrl).subscribe((data: any) => {
      console.log(data);
      if (data.message != "Not Found") {
        emailCtrl.setErrors({ emailExists: true });
      } else {
        this.successEmailFlag = true;
        emailCtrl.setErrors(null);
      }
    });
  }

  flagTogglerForUsername(usernameCtrl: FormControl) {
    if (usernameCtrl.valid) {
      this.successUsernameFlag = false;
    }
  }

  flagTogglerForEmail(emailCtrl: FormControl) {
    if (emailCtrl.valid) {
      this.successEmailFlag = false;
    }
  }
}
