"use strict";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './shared/material.module';

// za mobile frendly
import 'hammerjs';
import { AboutComponent } from './menu/about/about.component';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';
import { FooterComponent } from './menu/footer/footer.component';


import { MatToolbarModule } from '@angular/material/toolbar';

// ROUTING
import { AppRoutingModule } from './router';

// MODULI
import { UniversitycourseModule } from './app-universitycourse/universitycourse.module';
import { AppInvoiceModule } from './app-invoice/app-invoice.module';

// SERVISI
import { CoursesService } from './services/courses.service';
import { CourseResolver } from './services/course.resolver';
import { PageNotFoundComponent } from './menu/page-not-found/page-not-found.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TopMenuComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    UniversitycourseModule,
    AppInvoiceModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatToolbarModule
  ],
  providers: [CoursesService, CourseResolver],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
