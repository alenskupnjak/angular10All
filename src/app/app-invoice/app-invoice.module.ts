import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppInvoiceRoutingModule } from './app-invoice-routing.module';
import { AppInvoiceComponent } from './app-invoice.component';


@NgModule({
  declarations: [AppInvoiceComponent],
  imports: [
    CommonModule,
    AppInvoiceRoutingModule
  ]
})
export class AppInvoiceModule { }
