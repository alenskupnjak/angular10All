import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './menu/about/about.component';
import { PokusniComponent } from './app-universitycourse/pokusni/pokusni.component';
import { PageNotFoundComponent } from './menu/page-not-found/page-not-found.component';
import { AuthComponent } from './app-invoice/auth/auth.component';
import { AuthGuardService } from './app-invoice/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',  // Početna stranica
    component: AboutComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'about',   // Početna stranica
    component: AboutComponent,
  },
  {
    path: 'app-university', // Aplikacija University
    loadChildren: () =>
      import('./app-universitycourse/universitycourse.module').then(
        (m) => m.UniversitycourseModule
      ),
  },
  {
    path: 'app-invoice',   // Aplikacija Invoice
    // loadChildren:'./app-invoice/app-invoice.module#AppInvoiceModule',
    loadChildren: () =>
      import('./app-invoice/invoice.module').then((m) => m.InvoiceModule),
  },
  {
    path: 'flexLayout',   // Flex layout module
    // loadChildren:'./app-invoice/app-invoice.module#AppInvoiceModule',
    loadChildren: () =>
      import('./flex-layout-example/flex-layout-example.module').then((m) => m.FlexLayoutExampleModule),
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
      // scrollPositionRestoration: 'enabled',
      // relativeLinkResolution: 'corrected',
      // useHash: true,
      // enableTracing:false
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
