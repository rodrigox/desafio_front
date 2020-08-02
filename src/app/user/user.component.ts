import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  user: User;
  messageError: string;


  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.user = new User();
    this.getUser();
  }


  getUser() {
    this.userService.getUsers().subscribe(users => {this.users = users; },
       error => (this.messageError = error as any)
       );
   }

   get listUser() {
    return this.users;
  }


  saveUser() {
    this.userService.saveUser(this.user).subscribe(response => this.user);
    this.getUser();
    console.log('salvou salvou');
  }

  parseDate(dateString: string): Date {
    if (dateString) {
      this.user.birthday = new Date(dateString);
        return new Date(dateString);
    }
    return null;
   }

  deleteUser(idUser: any){
    this.userService.deleteUser(idUser).subscribe(response => this.user);
    this.getUser();
  }


 updateUser() {
  this.userService.updateUser(this.user).subscribe(response => this.user);
  this.getUser();
  console.log('atualizou');
}

}
