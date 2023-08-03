import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Citizen} from '../class/log-in';
import { Aadhar } from '../class/aadhar';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {

  constructor(private http:HttpClient) { }

  CitizenUrl:string ="http://localhost:8060/citizen";
  adharUrl:string="http://localhost:8060/aadhar"

  newcitizen !:Citizen;
  loggedIn !:Citizen;
  aadharDetails !: Aadhar;

  getCitizenById(id:number){
    return this.http.get<Citizen>(this.CitizenUrl+`/${id}`);
  }

  enrollCitizen(citizen:Citizen){
    return this.http.post<Citizen>(this.CitizenUrl+'/addUser',citizen);
  }

  setCitizen(citizen:Citizen):void{
    this.newcitizen = citizen;
  }

  loginCitizen(citizen:Citizen):void{
    this.loggedIn = citizen;
  }

  getaadhar(id:number){
    return this.http.get<Aadhar>(this.adharUrl+`/${id}`);
  }
} 
