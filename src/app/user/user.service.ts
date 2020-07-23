import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './user';
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

export class UserService{
private userUrl = 'api/user/';
private postUserUrl = 'api/save';

constructor(private http: HttpClient) {

}

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.userUrl)
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

saveUser(user: User): Observable<User> {
  return this.http.post <User>(this.userUrl, user).pipe(tap(data => console.log('POST REQ' + JSON.stringify(data))),
    catchError(this.handleError)
      );
}

deleteUser(user: User): Observable<User> {
  return this.http.delete <User>(this.userUrl + user.idUser).pipe(tap(data => console.log('DELETE REQ' + JSON.stringify(data))),
    catchError(this.handleError)
      );
}

}
