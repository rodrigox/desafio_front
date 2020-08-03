import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/Authentication.module';
import { AppRoutingModule } from './router/router.module';
import { HttpClientModule } from '@angular/common/http';
import { CarComponent } from './car/car.component';
import { CarEditComponent } from './car/car-edit/car-edit.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';







@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarEditComponent,
    EditUserComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    AuthenticationModule,
    AppRoutingModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
