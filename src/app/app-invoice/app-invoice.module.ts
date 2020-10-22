import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppInvoiceRoutingModule } from './router';
import { AppInvoiceComponent } from './app-invoice.component';

// Moduli
import { InvoicesModule } from './invoices/invoices.module';
import { ClientsModule } from './clients/clients.module';

import { InvoiceService } from './services/invoice.service';
import { ClientService } from './services/client.service';

@NgModule({
  declarations: [AppInvoiceComponent],
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
  providers: [InvoiceService, ClientService],
})
export class AppInvoiceModule {}
