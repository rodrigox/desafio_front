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


  users: User[];
  user: User;
  cars: Car[];

  idUser: any;

  messageError: string;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = new User();
    this.getUserById();
console.log("printando User : " +this.user);
  }

  getUserById() {

   this.idUser=1;
   this.userService.getUserById(this.idUser).subscribe(user => {this.user = user; },
       error => (this.messageError = error as any)
       );
   }
}
