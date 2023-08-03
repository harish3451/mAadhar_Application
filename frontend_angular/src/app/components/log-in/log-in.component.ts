import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Citizen } from 'src/app/class/log-in';
import { CitizenService } from 'src/app/service/citizenservice.service';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  LoginDetails!: Citizen;
  userid !:number ;
  password !:number;
  loggedIn:boolean=true;
  invalidUser:boolean= false;
  newUser:boolean = false;
  constructor(private citizenservice:CitizenService, private router:Router){}
  ngOnInit(){
    if(this.citizenservice.citizen != null){
      this.newUser = true;
      this.userid = this.citizenservice.citizen.id;
    }
  }
  login(){
    this.citizenservice.getCitizenById(this.userid).subscribe(
      Response => this.LoginDetails = Response,
      (error:any) => {console.log(error),this.invalidUser=true}
    );
    if(this.password == this.LoginDetails.phoneNumber){

        this.router.navigate(['/home']);
        this.loggedIn= !this.loggedIn
    }
    else{
      this.invalidUser =true;
      this.router.navigate(['/']);
    }
  }

  register(){
    this.router.navigate(['/register'])
  }
}
