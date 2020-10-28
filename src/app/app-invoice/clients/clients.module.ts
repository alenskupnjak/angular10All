import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListingComponent } from './client-listing/client-listing.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ClietDialogComponent } from './cliet-dialog/cliet-dialog.component';
import { TokenInvoiceInterceptorService } from '../services/token-interceptor.service';

@NgModule({
  declarations: [ClientListingComponent, ClietDialogComponent],
  imports: [CommonModule, MaterialModule],
  providers: [TokenInvoiceInterceptorService],
  entryComponents: [ClietDialogComponent],
})
export class ClientsModule {}
