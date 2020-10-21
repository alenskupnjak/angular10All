import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material.module';

import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { InvoiceListingComponent } from './invoice-listing/invoice-listing.component';

@NgModule({
  declarations: [InvoiceFormComponent, InvoiceListingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    // FormsModule,
    // ReactiveFormsModule,
  ],
})
export class InvoicesModule {}
