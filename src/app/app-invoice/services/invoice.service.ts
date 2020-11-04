import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice } from '../models/invoice';


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

  getInvoices(): Observable<any> {
    return this.httpClient.get<any>(
      environment.URL_Invoice + '/invoices'
    );
  }

  // EDIT
  getInvoice(id: string): Observable<Invoice> {
    return this.httpClient.get<Invoice>(
      `${environment.URL_Invoice}/invoices/${id}`
    );
  }

  // CREATE INVOICE
  createInvoice(body: Invoice): Observable<Invoice> {
    return this.httpClient.post<Invoice>(
      `${environment.URL_Invoice}/invoices`,
      body
    );
  }

  // DELETE DELETE DELETE DELETE
  deleteInvoice(id: string): Observable<Invoice> {
    return this.httpClient.delete<Invoice>(
      `${environment.URL_Invoice}/invoices/${id}`
    );
  }

  // UPDATE UPDATE UPDATE UPDATE
  updateInvoice(id: string, body: Invoice): Observable<Invoice> {
    return this.httpClient.put<Invoice>(
      `${environment.URL_Invoice}/invoices/${id}`,
      body
    );
  }
}
