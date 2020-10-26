import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListingComponent } from './client-listing/client-listing.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ClietDialogComponent } from './cliet-dialog/cliet-dialog.component';

@NgModule({
  declarations: [ClientListingComponent, ClietDialogComponent],
  imports: [CommonModule, MaterialModule],
  entryComponents: [ClietDialogComponent],
})
export class ClientsModule {}
