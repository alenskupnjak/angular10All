import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartflexComponent } from './startflex.component';
import { BaseComponent } from './base/base.component';
// import { TecajListaComponent } from './tecaj/tecaj-lista/tecaj-lista.component';
// import { CourseResolver } from '../services/course.resolver';
// import { CourseComponent } from './course-list/course/course.component';
// import { PokusniComponent } from './pokusni/pokusni.component';


// PATH: '/flex-layout-example,
const routes: Routes = [
  {
    path: '',
    component: StartflexComponent,
    // childern se dodaje na HomeComponent nastavku Homecomponent
    children: [{ path: 'base', component: BaseComponent }],
  },
  {
    path: 'homefile',
    component: BaseComponent,
    // children: [{ path: 'pokus', component: PokusniComponent }],
  },
  // { path: 'tecaj/:id', component: TecajListaComponent },
  // {
  //   path: 'courses/:id',
  //   component: CourseComponent,
  //   resolve: {
  //     course: CourseResolver,
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversitycourseRoutingModule {}
