import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {  // Početna stranica
    path: 'about',
    component: AboutComponent,
  },

  { // Aplikacija University
    path: 'app-university',
    loadChildren: () =>
    import('./app-universitycourse/universitycourse.module').then((m) => m.UniversitycourseModule),
  },

  {  // Aplikacija Invoice
    path: 'app-invoice',
        // loadChildren:'./app-invoice/app-invoice.module#AppInvoiceModule',
        loadChildren: () =>
        import('./app-invoice/app-invoice.module').then((m) => m.AppInvoiceModule),
  },

  {  //  Nepoznati LINK
    path: '**',
    redirectTo: '/about',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
