import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  id:number=0;
  
  Enroll(){
    this.id = Math.round(Math.random()*1000000);

    console.log(this.id);
  }
}
