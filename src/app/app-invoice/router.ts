import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppInvoiceComponent } from './app-invoice.component';
import { InvoiceFormComponent } from './invoices/invoice-form/invoice-form.component';
import { InvoiceListingComponent } from './invoices/invoice-listing/invoice-listing.component';
import { ClientListingComponent } from './clients/client-listing/client-listing.component';

// PATH: 'app-invoice',
const routes: Routes = [
  {
    path: '',
    component: AppInvoiceComponent,
    children: [
      // preusmjeravam na Invoice Listing
      { path: '', component:  InvoiceListingComponent },
      { path: 'invoice', component: InvoiceListingComponent },
    ],
  },
  { path: 'new', component: InvoiceFormComponent },
  // { path: 'invoice', component: InvoiceListingComponent },
  { path: 'invoice/:id', component: InvoiceFormComponent },
  { path: 'clients', component: ClientListingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppInvoiceRoutingModule {}
