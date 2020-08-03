import { Component, OnInit } from '@angular/core';
import { User } from '../../user/user';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
})
export class CarEditComponent implements OnInit {
  car: Car;
  sessionUser: User;
  idCar: string;
  messageError: string;
  f: FormGroup;


  constructor( private formBuilder: FormBuilder,
    private  carService: CarService, public router: Router) {

  }

  ngOnInit(): void {
    this.sessionUser = this.sessionUser = JSON.parse(
      localStorage.getItem('currentUser')
    );

    this.f = this.formBuilder.group({
      model: [null, [Validators.required]],
      color: [null, [Validators.required]]});
    this.car = new Car();

    this.idCar = localStorage.getItem('idcar');
    this.getCarById();
    console.log("****CAR *"+this.car);

    this.idCar = localStorage.getItem('idcar');
  }

  getCarById() {
    if (this.idCar == undefined) {
      this.router.navigateByUrl('car');
    }

    this.carService.getCarById(this.idCar).subscribe(
      (result) => {
        this.car = result[0];
      },
      (error) => (this.messageError = error as any)
    );
  }


  onSubmit() {
    this.car.idUser = this.sessionUser.idUser;
    this.carService.updateCar(this.car).subscribe((response) => this.car);
    this.router.navigateByUrl('car');
  }
}
