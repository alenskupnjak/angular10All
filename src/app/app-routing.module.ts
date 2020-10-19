import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CourseComponent } from './app-universitycourse/course-list/course/course.component';
import { HomeComponent } from './app-universitycourse/home.component';
import { HomefileComponent } from './app-universitycourse/homefile/homefile.component';
import { CourseResolver } from './services/course.resolver';
import { TecajListaComponent } from './app-universitycourse/tecaj/tecaj-lista/tecaj-lista.component';


const routes: Routes = [
    // Aplikacija University
  {
    path: 'app-university',
    loadChildren: () =>
    import('./app-universitycourse/universitycourse.module').then((m) => m.UniversitycourseModule),
    // component: HomeComponent,
  },
  {
    path: 'app-university/homefile',
    loadChildren: () =>
    import('./app-universitycourse/universitycourse.module').then((m) => m.UniversitycourseModule),
    // component: HomefileComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'courses/:id',
    component: CourseComponent,
    resolve: {
      course: CourseResolver,
    },
  },
  {
    path: 'tecaj/:id',
    component: TecajListaComponent,
  },
  // Aplikacija Invoice
  {
    path: 'invoice',
        // loadChildren:'./app-invoice/app-invoice.module#AppInvoiceModule',
        loadChildren: () =>
        import('./app-invoice/app-invoice.module').then((m) => m.AppInvoiceModule),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
