import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginResponse, User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  // Pratimo promjenu korisnika
  userAddedSource = new Subject<string>();

  // LOGIN LOGIN LOGIN LOGIN LOGIN LOGIN
  login(body: User): Observable<LoginResponse> {
    // Saljemo podatak emaila u glavni menu
    this.userAddedSource.next(body.email);

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

  // SIGNUP SIGNUP SIGNUP SIGNUP SIGNUP
  googleAuth(): Observable<any> {
    console.log('----------------', `${environment.URL_Invoice}/auth/google`);

    return this.httpClient.get<any>(`${environment.URL_Invoice}/auth/google`);
  }

  // provjera usera
  isAuthenticated(token): Observable<any> {
    console.log('isAuthenticated');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.httpClient.get<any>(
      `${environment.URL_Invoice}/authenticate`,
      httpOptions
    );
  }

  logOut(): Observable<any> {
    return this.httpClient.get<any>(`${environment.URL_Invoice}/logout`);
  }


}
