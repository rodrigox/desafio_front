import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from '../authentication/login.component';
import { CarComponent } from '../car/car.component';
import { AboutmeComponent } from '../user/aboutme.component';
import { AuthGuardService } from '../guards/auth-guard';
import { CarEditComponent } from '../car/car-edit/car-edit.component';
import { EditUserComponent } from '../user/edit-user/edit-user.component';



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot([
      {path: 'user', component: UserComponent},
      {path: 'user/edit', component: EditUserComponent},
      {path: 'login', component: LoginComponent},
      {path: 'car', component: CarComponent, canActivate: [AuthGuardService]},
      {path: 'car/edit', component: CarEditComponent, canActivate: [AuthGuardService]},
      {path: 'me', component: AboutmeComponent, canActivate: [AuthGuardService]},
      {path: '', redirectTo: 'user', pathMatch: 'full'},
      {path: '**', redirectTo: 'user', pathMatch: 'full'},
    ])
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
