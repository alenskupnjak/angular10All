import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { InvoiceService } from '../../services/invoice.service';
import { InvoicePaginationRsp } from '../../models/invoice';
import { Router } from '@angular/router';

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
  constructor(public invoiceService: InvoiceService, private router: Router) {}

  // veza sa datatable, nužno
  dataSource = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {

    // Dohvacenje podataka ne tri razlicita nacina!!!!!
    // 1 način
    this.invoiceService.getInvoices().subscribe((data) => {
      this.dataSource.data = data;
    });

    // Dohvacenje podataka ne tri razlicita nacina!!!!!
    // 2 način
    this.invoiceService.fetchAllInvoices().then((data) => {
      return data
      console.log(data);
    });

    // Dohvacenje podataka ne tri razlicita nacina!!!!!
    // 3 način
    this.invoiceService
      .fetchAllInvoicesAsync()
      .then((data) => {
        // console.log(data);
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

  saveForm() {
    this.router.navigate(['app-invoice','new']);
  }

  filterText(filterdata) {
    console.log(filterdata);
  }



}
