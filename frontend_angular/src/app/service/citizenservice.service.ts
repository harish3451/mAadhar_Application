import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Citizen } from '../class/log-in';

@Injectable({
  providedIn: 'root'
})
export class CitizenService {

  constructor(private http:HttpClient) { }

  CitizenUrl:string ="http://localhost:8060/citizen";

  

  getCitizenById(id:number){
    return this.http.get<Citizen>(this.CitizenUrl+`/${id}`);
  }

} 
