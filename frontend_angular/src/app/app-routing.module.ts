import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminLogInComponent } from './components/admin-log-in/admin-log-in.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

const routes: Routes = [
  {path:'',component:LogInComponent,children:
  [
    {path:'home',component:HomePageComponent}
  ]  
},
  {path:'register',component:RegisterComponent},
  {path:'admin', component:AdminLogInComponent, children:[
    {path:'home',component:AdminHomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
