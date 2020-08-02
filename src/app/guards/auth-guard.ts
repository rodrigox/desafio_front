import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    const currentUser = this.authService.currentUserValue;

    if (currentUser) {
      return true;
  }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;

  }
}
