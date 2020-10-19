import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { InvoiceListingComponent } from './invoice-listing/invoice-listing.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [InvoiceFormComponent, InvoiceListingComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
})
export class InvoicesModule {}
