import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile-page/profile/profile.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ProfileResolver} from './profile-page/shared/profile.resolver';


const routes: Routes = [
  {path: '', redirectTo: '/profile', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent, resolve: {data: ProfileResolver}},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
