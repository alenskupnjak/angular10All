import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

import { HomeComponent } from './home.component';
import { TecajComponent } from './tecaj/tecaj.component';
import { TecajListaComponent } from './tecaj/tecaj-lista/tecaj-lista.component';
import { CardListComponent } from './course-list/card-list.component';
import { DatafileComponent } from './homefile/datafile/datafile.component';
import { HomefileComponent } from './homefile/homefile.component';
import { CourseComponent } from './course-list/course/course.component';
import { UniversitycourseRoutingModule } from './router';
import { CourseTecajDialogComponent } from './course-tecaj-dialog/course-tecaj-dialog.component';
import { PokusniComponent } from './pokusni/pokusni.component';

@NgModule({
  declarations: [
    HomeComponent,
    TecajComponent,
    TecajListaComponent,
    CardListComponent,
    DatafileComponent,
    HomefileComponent,
    HomeComponent,
    CourseComponent,
    CourseTecajDialogComponent,
    PokusniComponent,
  ],
  imports: [
    CommonModule,
    UniversitycourseRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [CourseTecajDialogComponent],
})
export class UniversitycourseModule {}
