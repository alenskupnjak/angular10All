import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice } from '../models/invoice';
import { InvoicePaginationRsp } from '../models/invoice';

@Injectable({ providedIn: 'root' })
export class InvoiceService {
  constructor(private httpClient: HttpClient) {}

  // Dohvati sve Invoices
  fetchAllInvoices() {
    return fetch(environment.URL_Invoice + '/invoices')
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data);
        return data;
      });
  }

  async fetchAllInvoicesAsync() {
    const response = await fetch(environment.URL_Invoice + '/invoices');
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
    return this.httpClient.get<InvoicePaginationRsp>(
      environment.URL_Invoice + '/invoices'
    );
  }

  // EDIT
  getInvoice(id: string): Observable<Invoice> {
    return this.httpClient.get<Invoice>(`${environment.URL_Invoice}/invoices/${id}`);
  }

  // CREATE INVOICE
  createInvoice(body: Invoice): Observable<Invoice> {
    return this.httpClient.post<Invoice>(`${environment.URL_Invoice}/invoices`,body);
  }

  // DELETE DELETE DELETE DELETE
  deleteInvoice(id: string): Observable<Invoice> {
    return this.httpClient.delete<Invoice>(`${environment.URL_Invoice}/invoices/${id}`);
  }

  // UPDATE UPDATE UPDATE UPDATE
  updateInvoice(id: string, body: Invoice): Observable<Invoice> {
    return this.httpClient.put<Invoice>(`${environment.URL_Invoice}/invoices/${id}`,body);
  }
}
