import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { InvoiceListingComponent } from './invoice-listing/invoice-listing.component';
import { TokenInvoiceInterceptorService } from '../services/token-interceptor.service';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    InvoiceFormComponent,
    InvoiceListingComponent,
    InvoiceViewComponent,
  ],
  exports: [InvoiceFormComponent, InvoiceListingComponent],
  providers: [TokenInvoiceInterceptorService],
})
export class InvoicesModule {}
