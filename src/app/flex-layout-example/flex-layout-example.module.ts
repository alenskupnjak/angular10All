import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { StartflexComponent } from './startflex.component';
import { UniversitycourseRoutingModule } from './router';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [BaseComponent, StartflexComponent],
  imports: [
    CommonModule,
    UniversitycourseRoutingModule,
    MaterialModule
  ]
})
export class FlexLayoutExampleModule { }
