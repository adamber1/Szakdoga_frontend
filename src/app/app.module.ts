import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieComponent } from './pages/movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { AppMaterialModule } from './app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FilterpageComponent } from './pages/filterpage/filterpage.component';
import { ProgrammepageComponent } from './pages/programmepage/programmepage.component';
import { MoviepageComponent } from './pages/moviepage/moviepage.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminMovieComponent } from './admin/admin-movie/admin-movie.component';
import { AdminProgrammeComponent } from './admin/admin-programme/admin-programme.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HeaderComponent,
    MainpageComponent,
    FilterpageComponent,
    ProgrammepageComponent,
    MoviepageComponent,
    ReservationComponent,
    AdminMovieComponent,
    AdminProgrammeComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
