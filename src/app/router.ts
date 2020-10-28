import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './menu/about/about.component';
import { PokusniComponent } from './app-universitycourse/pokusni/pokusni.component';
import { PageNotFoundComponent } from './menu/page-not-found/page-not-found.component';
import { AuthComponent } from './app-invoice/auth/auth.component';

const routes: Routes = [
  {
    // Početna stranica
    path: '',
    component: AboutComponent,
    pathMatch: 'full',
  },

  {
    // Početna stranica
    path: 'about',
    component: AboutComponent,
  },

  {
    // Aplikacija University
    path: 'app-university',
    loadChildren: () =>
      import('./app-universitycourse/universitycourse.module').then(
        (m) => m.UniversitycourseModule
      ),
  },

  {
    // Aplikacija Invoice
    path: 'app-invoice',
    // loadChildren:'./app-invoice/app-invoice.module#AppInvoiceModule',
    loadChildren: () =>
      import('./app-invoice/invoice.module').then(
        (m) => m.InvoiceModule
      ),
  },

  {
    //  Pokusni LINK
    path: 'pokus',
    component: PokusniComponent,
  },
  {
    //  Nepoznati LINK
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution:"corrected",
      // useHash: true,
      // enableTracing:false
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
