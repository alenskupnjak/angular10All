import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';

// za mobile frendly
import 'hammerjs';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './universitycourse/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { CardListComponent } from './universitycourse/card-list/card-list.component';
import { DatafileComponent } from './universitycourse/datafile/datafile.component';
import { HomefileComponent } from './universitycourse/homefile/homefile.component';
import { CourseComponent } from './universitycourse/course/course.component';
import { FooterComponent } from './footer/footer.component';

// servisi
import { CoursesService } from './services/courses.service';
import { CourseResolver } from './services/course.resolver';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    TopMenuComponent,
    CardListComponent,
    DatafileComponent,
    HomefileComponent,
    CourseComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [CoursesService, CourseResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
