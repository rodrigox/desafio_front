import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[];
  car: Car;
  messageError: string;

  onSubmit(data){
    console.log('teste data teste' +data);
  }

  constructor(private carService: CarService) {}
  ngOnInit(): void {
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

    this.car.idUser =1;

    this.carService.saveCar(this.car).subscribe((response) => this.car);
    this.getCar();
    console.log('salvou salvou');
  }




}
