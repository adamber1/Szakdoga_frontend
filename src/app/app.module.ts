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



@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    HeaderComponent,
    MainpageComponent,
    FilterpageComponent,
    ProgrammepageComponent,
    MoviepageComponent
  ],
  imports: [
    BrowserModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
