import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app-universitycourse/home.component';
import { HomefileComponent } from '../app-universitycourse/homefile/homefile.component';
import { TecajListaComponent } from '../app-universitycourse/tecaj/tecaj-lista/tecaj-lista.component';
import { CourseResolver } from '../services/course.resolver';
import { CourseComponent } from './course-list/course/course.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      // { path: 'courses/:id', component: HomefileComponent },
      // { path: 'tecaj/:id', component: TecajListaComponent },
      // {path : 'invoices/:id',  component: InvoiceFormComponent},
    ],
  },
  { path: 'homefile', component: HomefileComponent },
  // { path: 'courses/:id', component: HomefileComponent },
  { path: 'tecaj/:id', component: TecajListaComponent },
  {
    path: 'courses/:id',
    component: CourseComponent,
    resolve: {
      course: CourseResolver,
    },
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversitycourseRoutingModule {}
