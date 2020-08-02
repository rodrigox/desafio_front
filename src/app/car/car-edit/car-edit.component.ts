import { Component, OnInit } from '@angular/core';
import { User } from '../../user/user';
import { Car } from '../car';
import { CarService } from '../car.service';
import { Router } from '@angular/router';

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


  constructor(private carService: CarService, public router: Router) {}

  ngOnInit(): void {
    this.sessionUser = this.sessionUser = JSON.parse(
      localStorage.getItem('currentUser')
    );

    this.car = new Car();

    this.idCar = localStorage.getItem('idcar');
    this.getCarById();
    console.log("****CAR *"+JSON.stringify((this.car)));

    this.idCar = localStorage.getItem('idcar');
  }

  getCarById() {
    if (this.idCar == undefined) {
      this.router.navigateByUrl('car');
    }

    this.carService.getCarById(this.idCar).subscribe(
      (car) => {
        this.car = car;
      },
      (error) => (this.messageError = error as any)
    );
  }

  updateCar(car: Car) {
    this.car.idUser = this.sessionUser.idUser;
    this.carService.updateCar(this.car).subscribe((response) => this.car);
    console.log('salvou salvou');
  }
  onSubmit() {
    this.car.idUser = this.sessionUser.idUser;
    this.carService.updateCar(this.car).subscribe((response) => this.car);
  }
}
