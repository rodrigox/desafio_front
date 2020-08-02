import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  f: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.f = this.formBuilder.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit() {
    this.authService.geTokenAuth(this.f.value).subscribe((result) => {
      if (result.token) {
        this.goTo('car');
      }
    });
  }
  goTo(path): void {
    this.router.navigateByUrl(path);
  }
}
