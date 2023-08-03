import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Citizen } from '../class/log-in';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {

  constructor(private http:HttpClient) { }

  CitizenUrl:string ="http://localhost:8060/citizen";

  citizen !:Citizen;

  getCitizenById(id:number){
    return this.http.get<Citizen>(this.CitizenUrl+`/${id}`);
  }

  enrollCitizen(citizen:Citizen){
    return this.http.post<Citizen>(this.CitizenUrl+'/addUser',citizen);
  }

  setCitizen(citizen:Citizen):void{
    this.citizen = citizen;
  }
} 
