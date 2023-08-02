import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NewEnrollComponent } from './components/new-enroll/new-enroll.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component'
@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomePageComponent,
    NewEnrollComponent,
    AdminHomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
