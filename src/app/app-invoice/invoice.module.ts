import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppInvoiceRoutingModule } from './router';
import { InvoiceComponent } from './invoice.component';

// Moduli
import { InvoicesModule } from './invoices/invoices.module';
import { ClientsModule } from './clients/clients.module';


// SERVISI
import { InvoiceService } from './services/invoice.service';
import { ClientService } from './services/client.service';
import { JwtLocalStorageService } from './services/jwt.localstorege.service';
// import { AuthService } from './services/auth.service';
import { TokenInvoiceInterceptorService } from './services/token-interceptor.service';
import { AuthGuardService } from './services/auth-guard.service';
import { EditInvoiceResolverService } from './services/edit-invoice-resolver.service';

@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    CommonModule,
    AppInvoiceRoutingModule,
    HttpClientModule,
    MaterialModule,
    InvoicesModule,
    ClientsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    InvoiceService,
    ClientService,
    JwtLocalStorageService,
    // AuthService,
    AuthGuardService,
    EditInvoiceResolverService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInvoiceInterceptorService,
      multi: true,
    },
  ],
})
export class InvoiceModule {}
