import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { CourseComponent } from './universitycourse/course-list/course/course.component';
import { HomeComponent } from './universitycourse/home.component';
import { HomefileComponent } from './universitycourse/homefile/homefile.component';
import { CourseResolver } from './services/course.resolver';
import { TecajListaComponent } from './universitycourse/tecaj/tecaj-lista/tecaj-lista.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'homefile',
    component: HomefileComponent,
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
    resolve: {
      course: CourseResolver,
    },
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
