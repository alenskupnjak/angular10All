import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';


@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.css'],
})


export class InvoiceListingComponent implements OnInit {
  displayedColumns: string[] = ['item','qty', 'date', 'due','rate', 'tax', 'action'];
  dataSource;
  constructor(public invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe((data) => {
      this.dataSource = data
      console.log(data);
    });

    this.invoiceService.fetchAllInvoices().then((data) => {
      console.log(data);
    });

    this.invoiceService
      .fetchAllInvoicesAsync()
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
