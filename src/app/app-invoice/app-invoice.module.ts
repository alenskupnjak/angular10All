import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';

import { AppInvoiceRoutingModule } from './app-invoice-routing.module';
import { AppInvoiceComponent } from './app-invoice.component';


@NgModule({
  declarations: [AppInvoiceComponent],
  imports: [
    CommonModule,
    AppInvoiceRoutingModule,
    MaterialModule
  ]
})
export class AppInvoiceModule { }
