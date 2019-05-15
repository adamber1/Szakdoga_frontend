import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { FilterpageComponent } from './pages/filterpage/filterpage.component';
import { ProgrammepageComponent } from './pages/programmepage/programmepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'filterpage', component: FilterpageComponent },
  { path: 'programmepage', component: ProgrammepageComponent },
  { path: '**', redirectTo: '/mainpage', pathMatch: 'full' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

export const routingComponents = [MainpageComponent, ProgrammepageComponent, FilterpageComponent]
