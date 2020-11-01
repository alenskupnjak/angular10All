import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild } from '@angular/router';
import { JwtLocalStorageService } from './jwt.localstorege.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private jwtService: JwtLocalStorageService, private router: Router) {}

  canActivate(): boolean {
    // ako je user logiran
    if (this.jwtService.getToken()) {
      return true;
    } else {
      // user nije logiran, navigavamo ga na logiranje
      this.router.navigate(['app-invoice', 'login']);
      return false;
    }
  }
  canActivateChild(): boolean {
    return this.canActivate();
  }
}
