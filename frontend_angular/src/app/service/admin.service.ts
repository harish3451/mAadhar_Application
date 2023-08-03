import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aadhar } from '../class/aadhar';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  adharUrl:string="http://localhost:8060/aadhar";
  
  

  getAllaadhar(){
    return this.http.get<Aadhar[]>(this.adharUrl+'/all');
  }

  issueAadhar(id:number, aadhar:Aadhar){
    return this.http.put<Aadhar>(this.adharUrl+`/update/${id}`,aadhar);
  }
}
