import { Component } from '@angular/core';
import { CitizenService } from 'src/app/service/citizenservice.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  newUser :boolean= false;
  constructor(private citizenservice:CitizenService){}

  ngOnInit(){
    
  }
}
