import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app-universitycourse/home.component';
import { HomefileComponent } from '../app-universitycourse/homefile/homefile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      // { path: '', component: HomefileComponent },
      // {path : 'invoices/new',  component: InvoiceFormComponent},
      // {path : 'invoices/:id',  component: InvoiceFormComponent},
    ],
  },
  { path: 'homefile', component: HomefileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversitycourseRoutingModule {}
