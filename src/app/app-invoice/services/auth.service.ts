import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginResponse, User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}


  // prikaz definicije
  // LOGIN LOGIN LOGIN LOGIN LOGIN LOGIN
  login(body: User): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      `${environment.URL_Invoice}/login`,
      body
    );
  }

  // SIGNUP SIGNUP SIGNUP SIGNUP SIGNUP
  signup(body: User): Observable<{ success: boolean; message: string }> {
    return this.httpClient.post<{ success: boolean; message: string }>(
      `${environment.URL_Invoice}/signup`,
      body
    );
  }

  //  definicija moze biti  ANY
  // signup(body: User): Observable<any> {
  //   return this.httpClient.post<any>(
  //     `${environment.URL_Invoice}/signup`,
  //     body
  //   );
  // }
}
