import { CommonModule } from '@angular/common';
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
import { FooterComponent } from './footer/footer.component';

// ROUTING
import { AppRoutingModule } from './app-routing.module';

// MODULI
import { UniversitycourseModule } from './app-universitycourse/universitycourse.module';

// SERVISI
import { CoursesService } from './services/courses.service';
import { CourseResolver } from './services/course.resolver';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TopMenuComponent,
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

})
export class AppModule {}
