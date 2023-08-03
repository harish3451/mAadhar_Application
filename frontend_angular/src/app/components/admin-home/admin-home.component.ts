import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Aadhar } from 'src/app/class/aadhar';
import { AdminService } from 'src/app/service/admin.service';
import { CitizenService } from 'src/app/service/citizenservice.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  constructor(private adminService:AdminService, private citizenSerive:CitizenService, private router:Router){}
  
  aadhar:Aadhar[]=[];

  ngOnInit(){
    this.adminService.getAllaadhar().subscribe(
      Response => {this.aadhar = Response },
      error => console.log(error)
    )
  }

  issue(aadhar:Aadhar){
      
      
      aadhar.status = "Issued";
      console.log(aadhar);
      this.adminService.issueAadhar(aadhar.id,aadhar).subscribe(
        Response=> console.log("Addhar issued"),
        error => console.log(error)
      );
  }

  delete(aadhar:Aadhar){
    aadhar.status = "Deleted";
    this.adminService.issueAadhar(aadhar.id,aadhar).subscribe(
      Response=> console.log("Addhar deleted"),
      error => console.log(error)
    );
  }

  logout(){
    this.router.navigate(['']);
  }
}
