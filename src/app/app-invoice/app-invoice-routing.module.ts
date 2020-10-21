import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppInvoiceComponent } from './app-invoice.component';
import { InvoiceFormComponent } from './invoices/invoice-form/invoice-form.component';
import { InvoiceListingComponent } from './invoices/invoice-listing/invoice-listing.component';
import { ClientListingComponent } from './clients/client-listing/client-listing.component';

const routes: Routes = [
  {
    path: '',
    component: AppInvoiceComponent,
    children: [
      // { path: 'new', component:  InvoiceFormComponent },
      // { path: 'invoices', component: InvoicesComponent },
      // {path : 'invoices/:id',  component: InvoiceFormComponent},
    ],
  },
  { path: 'new', component:  InvoiceFormComponent },
  { path: 'invoice', component: InvoiceListingComponent },
  { path: 'clients', component: ClientListingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppInvoiceRoutingModule {}
