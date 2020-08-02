import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from '../authentication/login.component';
import { CarComponent } from '../car/car.component';
import { AboutmeComponent } from '../user/aboutme.component';
import { AuthGuardService } from '../guards/auth-guard';
import { CarEditComponent } from '../car/car-edit/car-edit.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {path: 'home', component: UserComponent},
      {path: 'login', component: LoginComponent},
      {path: 'car', component: CarComponent, canActivate: [AuthGuardService]},
      {path: 'car/edit', component: CarEditComponent, canActivate: [AuthGuardService]},
      {path: 'me', component: AboutmeComponent, canActivate: [AuthGuardService]},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'},
    ])
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
