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
  ): Observable <boolean> | boolean {
    console.log('****** AuthGuardService *******');

    if (this.jwtService.getToken()) {
      return true;
      return ObservableOf (true);
    }

    let token = this.jwtService.getToken()
    console.log('Prosao kroz auth guard, Token= ', token);


    if ( route.queryParamMap.get('token')) {
      token = route.queryParamMap.get('token')
      this.jwtService.seToken(token);
      console.log(' Token dobiven iz backenda= ', token);
    }

    console.log(' TOKEN definiran',token);
    // ako je user logiran
    if (token) {
      // return true;
      return this.authService.isAuthenticated(token).pipe(
        map(authenticated => {
          this.authService.userAddedSource.next(authenticated.user)

          if (authenticated.authstatus === true) {
            this.jwtService.seToken(token);
            this.router.navigate(['app-invoice', 'invoice']);
            return true;
          }
          this.router.navigate(['app-invoice','login']);
          return false;
        }),
        catchError((err: any) => {
          console.log('Imamo grešku');

          this.router.navigate(['app-invoice','login']);
          return ObservableOf(false);
        })
      );
    } else {
      // user nije logiran, navigavamo ga na logiranje
      console.log('Nema local storage!');
      this.router.navigate(['app-invoice', 'login']);
      // this.router.navigate(['/about',]);
      ObservableOf(false);
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {

    return this.canActivate(route, state);
  }

  ngOnDestroy() {
  this.unsuscribeAuth.unsubscribe();
  }
}
