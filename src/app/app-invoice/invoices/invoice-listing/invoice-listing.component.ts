import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InvoiceService } from '../../services/invoice.service';
import { InvoicePaginationRsp } from '../../models/invoice';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.css'],
})
export class InvoiceListingComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'item',
    'qty',
    'date',
    'due',
    'rate',
    'tax',
    'action',
  ];
  // dataSource;
  constructor(public invoiceService: InvoiceService) {}

  // veza sa datatable, nužno
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe((data) => {
      this.dataSource.data = data;
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      console.log('vvv', data);
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

  ngAfterViewInit() {
    // definiranje paginatora i sortiranja
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  obrisiVise() {}

  saveForm() {}

  filterText(filterdata) {
    console.log(filterdata);
  }
}
