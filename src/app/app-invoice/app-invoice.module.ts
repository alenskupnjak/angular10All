import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';
// import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';


import { AppInvoiceRoutingModule } from './app-invoice-routing.module';
import { AppInvoiceComponent } from './app-invoice.component';

// Moduli
import { InvoicesModule } from './invoices/invoices.module';
import { ClientsModule } from './clients/clients.module';

import { InvoiceService } from './services/invoice.service';

@NgModule({
  declarations: [AppInvoiceComponent],
  imports: [
    CommonModule,
    AppInvoiceRoutingModule,
    HttpClientModule,
    MaterialModule,
    InvoicesModule,
    ClientsModule,
  ],
  providers: [InvoiceService]
})
export class AppInvoiceModule {}
