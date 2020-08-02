import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { AboutmeComponent } from './aboutme.component';


@NgModule({
  declarations: [UserComponent, AboutmeComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UserModule { }
