import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { InvoiceFormComponent } from './invoices/invoice-form/invoice-form.component';
import { InvoiceListingComponent } from './invoices/invoice-listing/invoice-listing.component';
import { ClientListingComponent } from './clients/client-listing/client-listing.component';
import { AuthComponent } from './auth/auth.component';

// PATH: '/app-invoice',
const routes: Routes = [
  {
    path: '',
    component: InvoiceComponent,
    children: [
      { path: 'invoice', component: InvoiceListingComponent },
    ],
  },
  { path: 'new', component: InvoiceFormComponent },
  // { path: 'invoice', component: InvoiceListingComponent },
  { path: 'invoice/:id', component: InvoiceFormComponent },
  { path: 'clients', component: ClientListingComponent },
  { path: 'login', component: AuthComponent },
  { path: 'signup', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppInvoiceRoutingModule {}
