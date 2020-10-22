import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

const BASE_URL = 'http://localhost:3001' + '/appinvoice';

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
    const response = await fetch(BASE_URL + '/clients');
    const responseData = await response.json();
    return responseData;
  }


  // *****************************************************
  // CREATE INVOICE
  createfetchInvoice(body: Client) {
    return fetch(`${BASE_URL}/clients`, {
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
        console.log('----', data);
        return data;
      });
  }

  // ***************************************
  // DELETE DELETE DELETE DELETE
  deleteInvoiceFetch(id: string) {
    return fetch(`${BASE_URL}/clients/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Invoice obrisan.');
      });
  }

  // **********************************************************
  // UPDATE UPDATE UPDATE UPDATE
  updateClientFetch(id: string, body: Client) {
    return fetch(`${BASE_URL}/clients/${id}`, {
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
        console.log('kiki riki', data);
        return data;
      });
  }
}
