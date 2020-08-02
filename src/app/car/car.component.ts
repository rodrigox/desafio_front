import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';
import { User } from '../user/user';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[];
  car: Car;
  messageError: string;
  sessionUser: User;

  onSubmit(data){
    console.log('teste data teste' + data);
  }

  constructor(private carService: CarService) {}
  ngOnInit(): void {
    this.sessionUser =  this.sessionUser = JSON.parse(localStorage.getItem('currentUser'));
    this.car = new Car();
    this.getCar();
  }

  getCar() {
    this.carService.getCars().subscribe(
      (cars) => {
        this.cars = cars;
      },
      (error) => (this.messageError = error as any)
    );
  }

  get listCar() {
    return this.cars;
  }

  saveCar() {

    this.car.idUser = this.sessionUser.idUser;

    this.carService.saveCar(this.car).subscribe((response) => this.car);
    this.getCar();
    console.log('salvou salvou');
  }


  deleteCar(idCar: any) {
    this.carService.deleteCar(idCar).subscribe((response) => this.car);
    this.getCar();
  }

  updateCar() {
    this.carService.updateCar(this.car).subscribe((response) => this.car);
    this.getCar();
    console.log('atualizou');
  }
}
