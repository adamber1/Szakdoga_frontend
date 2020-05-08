import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { FilterpageComponent } from './pages/filterpage/filterpage.component';
import { ProgrammepageComponent } from './pages/programmepage/programmepage.component';
import { MoviepageComponent } from './pages/moviepage/moviepage.component';
import { LoginComponent } from './login/login.component';
import { AdminMovieComponent } from './admin/admin-movie/admin-movie.component';
import { AdminProgrammeComponent } from './admin/admin-programme/admin-programme.component';
import { ProfileComponent } from './profile/profile.component';
import { ReservationComponent } from './reservation/reservation.component';
import { MovieFormComponent } from './admin/movie-form/movie-form.component';
import { ProgrammeFormComponent } from './admin/programme-form/programme-form.component';
import { AuthGuard } from './services/auth-guard.service';
import { ShowResolverService } from './services/show-resolver.service';
import { ReservationsResolverService } from './services/reservations-resolver.service';
import { ProgrammeResolverService } from './services/programme-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'filterpage', component: FilterpageComponent },
  { path: 'programmepage', component: ProgrammepageComponent, resolve: { shows: ProgrammeResolverService } },
  { path: 'moviepage/:id', component: MoviepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin/movies', component: AdminMovieComponent, canActivate: [AuthGuard] },
  { path: 'admin/movies/new', component: MovieFormComponent, canActivate: [AuthGuard] },
  { path: 'admin/programme', component: AdminProgrammeComponent, canActivate: [AuthGuard] },
  { path: 'admin/programme/new', component: ProgrammeFormComponent, canActivate: [AuthGuard] },
  { path: 'reservation', component: ReservationComponent },
  { path: 'reservation/:id', component: ReservationComponent, resolve: { show: ShowResolverService, reservations: ReservationsResolverService } },
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

export const routingComponents = [MainpageComponent, ProgrammepageComponent, FilterpageComponent, MoviepageComponent]
