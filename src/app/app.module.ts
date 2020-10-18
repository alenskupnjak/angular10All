import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module';

// za mobile frendly
import 'hammerjs';
import { AboutComponent } from './about/about.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
// import { CardListComponent } from './universitycourse/course-list/card-list.component';
// import { DatafileComponent } from './universitycourse/datafile/datafile.component';
// import { HomefileComponent } from './universitycourse/homefile/homefile.component';
// import { CourseComponent } from './universitycourse/course/course.component';
import { FooterComponent } from './footer/footer.component';


import { AppRoutingModule } from './app-routing.module';

// MODULI
import { UniversitycourseModule } from './universitycourse/universitycourse.module';

// servisi
import { CoursesService } from './services/courses.service';
import { CourseResolver } from './services/course.resolver';
import { CommonModule } from '@angular/common';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    // HomeComponent,
    TopMenuComponent,
    // CardListComponent,
    // DatafileComponent,
    // HomefileComponent,
    // CourseComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    UniversitycourseModule,
  ],
  providers: [CoursesService, CourseResolver],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
