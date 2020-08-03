import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  f: FormGroup;

  sessionUser: User;
  idUser: string;
  user: User;
  messageError: string;


  constructor(private formBuilder: FormBuilder, private userService: UserService, public router: Router) { }

  ngOnInit(): void {
    this.sessionUser = this.sessionUser = JSON.parse(
      localStorage.getItem('currentUser')
    );

    this.f = this.formBuilder.group({
      FirstName: [null, [Validators.required]],
      color: [null, [Validators.required]]});

    this.idUser = localStorage.getItem('iduser');
    this.getUserById();

    localStorage.removeItem('iduser');

  }


  getUserById() {
    if (this.idUser == undefined) {
      this.router.navigateByUrl('user');
    }

    this.userService.getUserById(this.idUser).subscribe(
      (result) => {
        this.user = result;
      },
      (error) => (this.messageError = error as any)
    );
  }

  onSubmit() {
    this.userService.updateUser(this.user).subscribe((response) => this.user);
    this.router.navigateByUrl('user');

  }

}
