import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginRsp, SignupRsp, User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(body: User): Observable<LoginRsp> {
    return this.httpClient.post<LoginRsp>(
      `${environment.URL_Invoice}/login`,
      body
    );
  }
  signup(body: User): Observable<SignupRsp> {
    return this.httpClient.post<SignupRsp>(
      `${environment.URL_Invoice}/signup`,
      body
    );
  }
}
