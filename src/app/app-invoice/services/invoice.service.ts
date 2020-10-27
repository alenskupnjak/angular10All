import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice';
import { InvoicePaginationRsp } from '../models/invoice';

const BASE_URL = 'http://localhost:3001' + '/appinvoice';
// const BASE_URL = "https://skup-crudmongo.herokuapp.com/api";

@Injectable({ providedIn: 'root' })
export class InvoiceService {
  constructor(private httpClient: HttpClient) {}

  // Dohvati sve Invoices
  fetchAllInvoices() {
    return fetch(BASE_URL + '/invoices')
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        return data;
      });
  }

  async fetchAllInvoicesAsync() {
    const response = await fetch(BASE_URL + '/invoices');
    const responseData = await response.json();
    return responseData;
  }

  getInvoices(): // {
  // page,
  // perPage,
  // sortField,
  // sortDir,
  // filter,
  // }
  Observable<any> {
    // let queryString = `${BASE_URL}/invoices?page=${
    //   page + 1
    // }&perPage=${perPage}`;

    // if (sortField && sortDir) {
    //   queryString = `${queryString}&sortField=${sortField}&sortDir=${sortDir}`;
    // }

    // if (filter) {
    //   queryString = `${queryString}&filter=${filter}`;
    // }

    // return this.httpClient.get<InvoicePaginationRsp>(queryString);
    return this.httpClient.get<InvoicePaginationRsp>(BASE_URL + '/invoices');
  }

  // ****************************************
  // EDIT
  getInvoice(id: string): Observable<Invoice> {
    return this.httpClient.get<Invoice>(`${BASE_URL}/invoices/${id}`);
  }

  // *****************************************************
  // CREATE INVOICE
  createInvoice(body: Invoice): Observable<Invoice> {
    console.log(body);
    return this.httpClient.post<Invoice>(`${BASE_URL}/invoices`, body);
  }

  createfetchInvoice(body: Invoice) {
    return fetch(`${BASE_URL}/invoices`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item: body.item,
        qty: body.qty,
        date: body.date,
        due: body.due,
        rate: body.rate,
        tax: body.tax,
        invoiceclient: body.invoiceclient,
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
  deleteInvoice(id: string): Observable<Invoice> {
    return this.httpClient.delete<Invoice>(`${BASE_URL}/invoices/${id}`);
  }

  // FETCH metoda
  deleteInvoiceFetch(id: string) {
    return fetch(`${BASE_URL}/invoices/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Invoice obrisan.');
      });
  }

  // *******************************************************************************
  // UPDATE UPDATE UPDATE UPDATE
  updateInvoice(id: string, body: Invoice): Observable<Invoice> {
    return this.httpClient.put<Invoice>(`${BASE_URL}/invoices/${id}`, body);
  }

  updateInvoiceFetch(id: string, body: Invoice) {
    return fetch(`${BASE_URL}/invoices/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item: body.item,
        qty: body.qty,
        date: body.date,
        due: body.due,
        rate: body.rate,
        tax: body.tax,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('kiki riki', data);
        return data;
      });
  }
}
