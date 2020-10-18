import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';

// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatTableModule } from '@angular/material/table';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { TecajComponent } from './tecaj/tecaj.component';
import { TecajListaComponent } from './tecaj/tecaj-lista/tecaj-lista.component';
import { CardListComponent } from './course-list/card-list.component';
import { DatafileComponent } from './datafile/datafile.component';
import { HomefileComponent } from './homefile/homefile.component';
import { CourseComponent } from './course/course.component';

// import { CoursesService } from '../services/courses.service';
// import { CourseResolver } from '../services/course.resolver';

import { UniversitycourseRoutingModule } from './universitycourse-routing.module';

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
  ],
  imports: [
    CommonModule,
    UniversitycourseRoutingModule,
    MaterialModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    // MatFormFieldModule,
    // MatPaginatorModule,
    // MatTableModule,
    // MatProgressSpinnerModule,
    // MatButtonModule,
    // MatIconModule,
  ],
  // providers: [CoursesService, CourseResolver],
})
export class UniversitycourseModule {}
