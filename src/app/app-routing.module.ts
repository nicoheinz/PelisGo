import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { HelpComponent } from  '../app/help/help.component';
import { DetailComponent } from '../app/detail/detail.component';
import { FacebookModule } from 'ngx-facebook';

const routes: Routes = [
  { path: 'home/:type', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'detail/:tittle', component: DetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FacebookModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
