import { Component } from '@angular/core';
import { Aadhar } from 'src/app/class/aadhar';
import { Citizen } from 'src/app/class/log-in';
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
  constructor(private citizenservice:CitizenService){}
  aadhar!:Aadhar;

  ngOnInit(){
    this.citizen = this.citizenservice.loggedIn;
    console.log(this.citizen.id);
    this.newEnroll = this.citizenservice.newcitizen;
    this.citizenservice.getaadhar(this.citizen.id).subscribe(
      (response) => this.aadhar = response,
      error => console.log(error)
    )
    if(this.aadhar == null && this.newEnroll !=null){
      this.newUser = true;
    }
  }


}
