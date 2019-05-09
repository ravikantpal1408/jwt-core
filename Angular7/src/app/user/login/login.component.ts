import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {


  returnUrl: string;


  formModel = {
    UserName: '',
    Password: ''
  };

  constructor(private service: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('/home');
    }
  }

  onSubmit(form: NgForm) {
    this.spinner.show();
    this.service.login(form.value).subscribe(
      (res: any) => {
        this.spinner.hide();
        localStorage.setItem('token', res.token);

        // login successful so redirect to return url

        this.router.navigateByUrl(this.returnUrl);

        // this.router.navigateByUrl('/home');
      },
      err => {
        this.spinner.hide();
        if (err.status == 400) {
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        } else {
          console.log(err);
        }
      }
    );
  }
}
