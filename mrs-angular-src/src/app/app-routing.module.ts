import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { NowshowingComponent } from './views/nowshowing/nowshowing.component';
import { ReservationsComponent } from './views/reservations/reservations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nowshowing', component: NowshowingComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
