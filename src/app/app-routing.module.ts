import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CourseComponent } from './app-universitycourse/course-list/course/course.component';
import { HomeComponent } from './app-universitycourse/home.component';
import { HomefileComponent } from './app-universitycourse/homefile/homefile.component';
import { CourseResolver } from './services/course.resolver';
import { TecajListaComponent } from './app-universitycourse/tecaj/tecaj-lista/tecaj-lista.component';


const routes: Routes = [
  // Početna stranica
  {
    path: 'about',
    component: AboutComponent,
  },

    // Aplikacija University
  {
    path: 'app-university',
    loadChildren: () =>
    import('./app-universitycourse/universitycourse.module').then((m) => m.UniversitycourseModule),
    // component: HomeComponent,
  },

  // Aplikacija Invoice
  {
    path: 'app-invoice',
        // loadChildren:'./app-invoice/app-invoice.module#AppInvoiceModule',
        loadChildren: () =>
        import('./app-invoice/app-invoice.module').then((m) => m.AppInvoiceModule),
  },

  // {
  //   path: 'app-university/homefile',
  //   loadChildren: () =>
  //   import('./app-universitycourse/universitycourse.module').then((m) => m.UniversitycourseModule),
  //   // component: HomefileComponent,
  // },
  // {
  //   path: 'app-university/courses/:id',
  //   component: CourseComponent,
  //   resolve: {
  //     course: CourseResolver,
  //   },
  // },
  // {
  //   path: 'app-university/tecaj/:id',
  //   component: TecajListaComponent,
  // },

  //  Nepoznati LINK
  {
    path: '**',
    redirectTo: '/about',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
