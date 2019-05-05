import { CustomerService } from '../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.formModel.reset();

  }

  onSubmit(){
    this.customerService.registerCustomer().subscribe((res: any)=>{
      console.log(res);
    })
  }

}
