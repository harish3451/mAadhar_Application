import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Citizen } from 'src/app/class/log-in';
import { CitizenService } from 'src/app/service/citizenservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  id:number=0;
  dublicate:boolean=false;
  name!:string;
  phone !:number;
  address !:string;
  gender !:string;
  email!:string;
  dob !: string;
  citizen :Citizen ={
    id:0,
    name:'',
    phoneNumber:0,
    address:'',
    gender:'',
    email:'',
    dateOfBirth: ''
  } ;
  constructor(private citizenService:CitizenService, private router:Router){}
  Enroll(){
    while(this.id<99999){
        this.id = Math.round(Math.random()*1000000);
    }
    console.log(this.id);
    
    this.citizen.id = this.id;
    this.citizen.name = this.name;
    this.citizen.dateOfBirth = this.dob;
    this.citizen.address =this.address;
    this.citizen.gender = this.gender;
    this.citizen.phoneNumber = this.phone;
    this.citizen.email=this.email;
    console.log(this.citizen);
    this.citizenService.enrollCitizen(this.citizen).subscribe(
      Response=> {console.log(Response),
                   this.id=0, 
                   this.citizenService.setCitizen(this.citizen),
                   this.router.navigate(["/home"])      
      },
      error => {console.log(error), this.dublicate=true}
    );
    
  }
}
 