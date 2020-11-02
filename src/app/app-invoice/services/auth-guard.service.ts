import { Injectable, OnDestroy } from '@angular/core';
import {
  CanActivate,
  Router,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { JwtLocalStorageService } from './jwt.localstorege.service';
import { of as ObservableOf, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate, CanActivateChild, OnDestroy {
  unsuscribeAuth: Subscription
  nesto;
  constructor(
    private jwtService: JwtLocalStorageService,
    private router: Router,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable <boolean> {

    if (this.jwtService.getToken()) {
      return ObservableOf (true);
    }


    const token = route.queryParamMap.get('token');
    console.log('Prosao kroz auth guard, Token= ', token);
    if (token) {
      this.jwtService.seToken(token);
    }

    console.log(' U prolazu-c', this.jwtService.getToken());
    // ako je user logiran
    if (token) {
      // return true;
      return this.authService.isAuthenticated(token).pipe(
        map(authenticated => {
          console.log(authenticated,'tototo');
          this.authService.userAddedSource.next(authenticated.user)

          if (authenticated.authstatus === true) {
            console.log('ajmoo');
            this.jwtService.seToken(token);
            this.router.navigate(['/app-invoice', 'invoice']);
            return true;
          }
          this.router.navigate(['/app-invoice','/login']);
          return false;
        }),
        catchError((err: any) => {
          this.router.navigate(['/app-invoice','/login']);
          return ObservableOf(false);
        })
      );
    } else {
      // user nije logiran, navigavamo ga na logiranje
      console.log('Nema local storage');
      this.router.navigate(['/app-invoice', '/login']);
      ObservableOf(false);
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.canActivate(route, state);
  }

  ngOnDestroy() {
  this.unsuscribeAuth.unsubscribe();
  }
}
