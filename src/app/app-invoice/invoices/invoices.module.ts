import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { InvoiceListingComponent } from './invoice-listing/invoice-listing.component';
import { TokenInvoiceInterceptorService } from '../services/token-interceptor.service';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [InvoiceFormComponent, InvoiceListingComponent],
  exports: [InvoiceFormComponent, InvoiceListingComponent],
  providers: [TokenInvoiceInterceptorService],
})
export class InvoicesModule {}
