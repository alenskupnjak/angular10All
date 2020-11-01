import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class JwtLocalStorageService {
  constructor() {}

  seToken(tokenInvoice: string) {
    window.localStorage.setItem('Invoice_Angular10All_token', tokenInvoice);
  }
  getToken() {
    return window.localStorage.getItem('Invoice_Angular10All_token');
  }
  destroyToken() {
    window.localStorage.removeItem('Invoice_Angular10All_token');
  }
}
