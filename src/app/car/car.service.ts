import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Car } from './car';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../user/user';


let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

//singleton
@Injectable({
  providedIn: 'root'
})

export class CarService{
private carUrl = '/carsystem/api/car/';
sessionUser: User;


constructor(private http: HttpClient) {
  this.sessionUser =  this.sessionUser = JSON.parse(localStorage.getItem('currentUser'));

}

getCars(): Observable<Car[]> {
  let httpOptions = this.getOptions();

  return this.http.get<Car[]>(this.carUrl,{ headers: httpOptions})
      .pipe(tap(data => console.log('ALL' + JSON.stringify(data))),
          catchError(this.handleError)
      );
}

handleError(err: HttpErrorResponse) {
  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
  } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage);
  return throwError(errorMessage);
}

saveCar(car: Car): Observable<Car> {
  let httpOptions = this.getOptions();
  return this.http.post <Car>(this.carUrl, car, { headers: httpOptions}).pipe(tap(data => console.log('POST REQ' + JSON.stringify(data))),
    catchError(this.handleError)
      );
}

updateCar(car: Car): Observable<Car> {
  let httpOptions = this.getOptions();

  return this.http.put <Car>(this.carUrl, car,{ headers: httpOptions}).pipe(tap(data => console.log('PUT REQ' + JSON.stringify(data))),
    catchError(this.handleError)
      );
}

deleteCar(idCar: any): Observable<Car> {
  let httpOptions = this.getOptions();
  return this.http.delete <Car>(this.carUrl + idCar, { headers: httpOptions}).pipe(tap(data => console.log('DELETE REQ' + JSON.stringify(data))),
    catchError(this.handleError)
      );
}

getCarById(idCar: string): Observable<Car> {
  let httpOptions = this.getOptions();
  return this.http.get<Car>(this.carUrl,{ headers: httpOptions})
  .pipe(tap(data => console.log('ALL' + JSON.stringify(data))),
      catchError(this.handleError)
  );
}





private getOptions() {
  return new HttpHeaders()
    .set('Authorization', 'Bearer ' +
      this.sessionUser.token);
}

}
