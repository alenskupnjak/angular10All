import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor(private httpClient: HttpClient) {}

  // // Dohvati sve Invoices
  // fetchAllClients() {
  //   return fetch(BASE_URL + '/clients')
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       // console.log(data);
  //       return data;
  //     });
  // }

  async fetchAllClientsAsync() {
    const response = await fetch(environment.URL_Invoice + '/clients');
    const responseData = await response.json();
    return responseData;
  }

  // *****************************************************
  // CREATE CREATE CREATE CREATE
  createfetchClient(body: Client) {
    return fetch(`${environment.URL_Invoice}/clients`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  // ***************************************
  // DELETE DELETE DELETE DELETE
  getOneClient(id: string) {
    return fetch(`${environment.URL_Invoice}/clients/${id}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return data;
        console.log('Invoice obrisan.');
      });
  }

  // ***************************************
  // DELETE DELETE DELETE DELETE
  deleteClient(id: string) {
    return fetch(`${environment.URL_Invoice}/clients/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Invoice obrisan.');
      });
  }

  // **********************************************************
  // UPDATE UPDATE UPDATE UPDATE
  updateClient(id: string, body: Client) {
    return fetch(`${environment.URL_Invoice}/clients/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        return data;
      });
  }
}
