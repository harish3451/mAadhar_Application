import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Aadhar } from 'src/app/class/aadhar';
import { Citizen } from 'src/app/class/log-in';
import { AdminService } from 'src/app/service/admin.service';
import { CitizenService } from 'src/app/service/citizenservice.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  newUser :boolean= false;
  citizen !:Citizen;
  newEnroll !:Citizen;
  constructor(private citizenservice:CitizenService,private aadharService:AdminService, private router:Router){}
  aadhar!:Aadhar;
  uid :number=0;
  applied:boolean = false;
  background:string='';

  ngOnInit(){
    this.citizen = this.citizenservice.loggedIn;
    console.log(this.citizen.id);
    this.newEnroll = this.citizenservice.newcitizen;
    this.citizenservice.getaadhar(this.citizen.id).subscribe(
      response => {this.aadhar = response;
                    if(response ==  null){
                      this.newUser = true;
                      this.newEnroll = this.citizen;
                    }              
                    if(this.aadhar.status == "Issued"){
                      this.background="green"
                    }
                    else if(this.aadhar.status == "Applied"){
                      this.background="blue"
                    }
                    else{
                      this.background="grey"
                    }
                  },
      error => console.log(error)
    )
  }
  applyAadhar(){
    this.citizen = this.newEnroll;
    while(this.uid<=99999){
      this.uid=Math.round(Math.random()*1000000);
    }
    this.aadhar = {
      uid:this.uid,
      citizen:this.citizen,
      status:"Applied",
      id:this.uid
    }
    // console.log(this.aadhar);
    this.citizenservice.applyAadhar(this.citizen.id,this.aadhar).subscribe(
      Response => {this.aadhar=Response;
        this.newUser = false;
        this.applied = true;},
      Error => console.log(Error)
    );

  }

  delete(){
    this.aadhar.status = "Delete";
    this.aadharService.issueAadhar(this.aadhar.id,this.aadhar).subscribe(
      Response=> console.log("Addhar deleted"),
      error => console.log(error)
    );
  }


  logout(){
    this.router.navigate(['/']);
  }
}
