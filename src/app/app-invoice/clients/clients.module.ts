import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListingComponent } from './client-listing/client-listing.component';
import { MaterialModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [ClientListingComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class ClientsModule { }
