import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';

import { AppInvoiceRoutingModule } from './app-invoice-routing.module';
import { AppInvoiceComponent } from './app-invoice.component';
import { InvoicesModule } from './invoices/invoices.module';
import { ClientsModule } from './clients/clients.module';

@NgModule({
  declarations: [AppInvoiceComponent],
  imports: [
    CommonModule,
    AppInvoiceRoutingModule,
    MaterialModule,
    InvoicesModule,
    ClientsModule
  ],
})
export class AppInvoiceModule {}
