import { Car } from '../car/car';

export class User {

  idUser: number;
  firstName: string;
  lastName: string;
  email: string;
  birthday: Date;
  login: string;
  password: string;
  phone: string;
  creationDate: Date;
  lastLogin: Date;
  cars: Car[];
}
