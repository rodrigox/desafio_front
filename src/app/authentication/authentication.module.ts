import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../authentication/login.component';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ]
})
export class AuthenticationModule { }
