import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }


  // openNav() {
  //   document.getElementById('mySidenav').style.width = '250px';
  // }

  // closeNav() {
  //   document.getElementById('mySidenav').style.width = '0';
  // }

}
