import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.css'],
})
export class InvoiceViewComponent implements OnInit {
  invoice: Invoice;
  clientEmail: string;
  clientLastName: string;
  clientFirstName: string;
  total: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // sablona za resolver
    this.route.data.subscribe((data: { invoice: Invoice }) => {
      this.invoice = data.invoice;
      this.clientEmail = this.invoice.invoiceclient['email'];
      this.clientLastName = this.invoice.invoiceclient.lastName;
      this.clientFirstName = this.invoice.invoiceclient.firstName;

      if (
        typeof this.invoice.qty !== 'undefined' &&
        typeof this.invoice.rate !== 'undefined'
      ) {
        this.total = +this.invoice.qty * +this.invoice.rate;
      }

      let salesTax = 0;
      if (typeof this.invoice.tax !== 'undefined') {
        salesTax = (+this.total * +this.invoice.tax) / 100;
      }
      this.total += salesTax;
    });
  }
}
