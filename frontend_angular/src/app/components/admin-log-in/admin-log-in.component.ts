import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-admin-log-in',
  templateUrl: './admin-log-in.component.html',
  styleUrls: ['./admin-log-in.component.css']
})
export class AdminLogInComponent {
  loggedIn:boolean=false;

  constructor(private router:Router){}

  adminId !:string;
  password !:string;
  invalidUser:boolean=false;

  login(){
    if(this.adminId == "admin@gmail.com" && this.password== "Admin@123456"){
      this.loggedIn = true;
      this.router.navigate(['/admin/home']);
    }
    else{
      this.invalidUser = true;
    }
  }

  userLogin(){
    this.router.navigate(['']);
  }
}
