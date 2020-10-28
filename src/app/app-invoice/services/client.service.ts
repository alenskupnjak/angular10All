import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor(private httpClient: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(`${environment.URL_Invoice}/clients`);
  }

  async fetchAllClientsAsync() {
    const response = await fetch(environment.URL_Invoice + '/clients');
    const responseData = await response.json();
    return responseData;
  }

  // *****************************************************
  // CREATE CREATE CREATE CREATE
  createClient(body: Client): Observable<Client> {
    return this.httpClient.post<Client>(
      `${environment.URL_Invoice}/clients`,
      body
    );
  }

  // ***************************************
  // GET GET GET GET
  getClient(id: string): Observable<Client> {
    return this.httpClient.get<Client>(
      `${environment.URL_Invoice}/clients/${id}`
    );
  }

  // ***************************************
  // DELETE DELETE DELETE DELETE
  deleteClient(id: string): Observable<Client> {
    return this.httpClient.delete<Client>(
      `${environment.URL_Invoice}/clients/${id}`
    );
  }

  // **********************************************************
  // UPDATE UPDATE UPDATE UPDATE
  updateClient(id: string, body: Client): Observable<Client> {
    return this.httpClient.put<Client>(
      `${environment.URL_Invoice}/clients/${id}`,
      body
    );
  }
}
