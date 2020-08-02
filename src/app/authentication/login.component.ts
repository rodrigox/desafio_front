import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  f: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.f = this.formBuilder.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

onSubmit(){
  this.authService.geTokenAuth(this.f.value).subscribe (
    (data) => {console.log(data); }
    );
}

}
