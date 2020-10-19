import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppInvoiceComponent } from './app-invoice.component';

const routes: Routes = [
  { path: '', component: AppInvoiceComponent,
    children: [
      // { path: '', component: AppInvoiceComponent },
      // {path : 'invoices/new',  component: InvoiceFormComponent},
      // {path : 'invoices/:id',  component: InvoiceFormComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppInvoiceRoutingModule {}
