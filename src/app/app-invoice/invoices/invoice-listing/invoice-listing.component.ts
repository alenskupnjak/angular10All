import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.css'],
})
export class InvoiceListingComponent implements OnInit {
  constructor(public invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe((data) => {
      console.log('****');

      console.log(data);
    });

    this.invoiceService.fetchAllInvoices().then((data) => {
      console.log('ajmooo');
      console.log(data);
    });
  }
}
