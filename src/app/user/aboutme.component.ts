import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { Car } from '../car/car';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {


   sessionUser: User;


  users: User[];
  user: User;
  cars: Car[];

  idUser: any;

  messageError: string;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = new User();
    this.sessionUser = JSON.parse(localStorage.getItem('currentUser'));

     this.getUserByLogin();

  }

  getUserByLogin() {
   this.userService.getUserByLogin( this.sessionUser.login).subscribe(user => {this.user = user; },
       error => (this.messageError = error as any)
       );
   }
}
