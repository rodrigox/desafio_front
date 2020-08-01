import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Car } from './car';
import { catchError, tap } from 'rxjs/operators';


const httpOptions = {
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
private carUrl = 'api/car/';

constructor(private http: HttpClient) {

}

getCars(): Observable<Car[]> {
  return this.http.get<Car[]>(this.carUrl)
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
  return this.http.post <Car>(this.carUrl, car).pipe(tap(data => console.log('POST REQ' + JSON.stringify(data))),
    catchError(this.handleError)
      );
}

updateCar(car: Car): Observable<Car> {
  return this.http.post <Car>(this.carUrl, car).pipe(tap(data => console.log('PUT REQ' + JSON.stringify(data))),
    catchError(this.handleError)
      );
}

deleteCar(idCar: any): Observable<Car> {
  return this.http.delete <Car>(this.carUrl + idCar).pipe(tap(data => console.log('DELETE REQ' + JSON.stringify(data))),
    catchError(this.handleError)
      );
}

}
