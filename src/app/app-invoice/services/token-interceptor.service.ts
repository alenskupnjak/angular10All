import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtLocalStorageService } from './jwt.localstorege.service';

@Injectable({ providedIn: 'root' })
export class TokenInvoiceInterceptorService implements HttpInterceptor {
  constructor(private jwtService: JwtLocalStorageService) {}

  intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Prosao kroz interceptor..');
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    const token = this.jwtService.getToken();

    if(!token) {
      console.log('Nema tokena!');
    }

    if (token) {
      headersConfig['Authorization'] = `Bearer ${token}`;
      headersConfig['MOJ'] = `Moj header`;
    }
    const authRequest = req.clone({ setHeaders: headersConfig });
    return next.handle(authRequest);
  }
}
