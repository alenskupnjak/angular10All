import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';

import { InvoicePaginationRsp } from '../../models/invoice';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.css'],
})
export class InvoiceListingComponent implements OnInit, AfterViewInit {
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  spinnerLoad: boolean = false;
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
  constructor(
    public invoiceService: InvoiceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  // veza sa datatable, nužno
  dataSource = new MatTableDataSource<Invoice>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.spinnerLoad = true;
    // Dohvacenje podataka ne tri razlicita nacina!!!!!
    // 1 način
    this.invoiceService.getInvoices().subscribe((data) => {
      this.spinnerLoad = false;
      return (this.dataSource.data = data);
    });

    // Dohvacenje podataka ne tri razlicita nacina!!!!!
    // 2 način
    this.invoiceService.fetchAllInvoices().then((data) => {

      return data;
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
        console.error(err);
      });
  }

  ngAfterViewInit() {
    // definiranje paginatora i sortiranja
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  obrisiVise() {}

  // Brisanje jednog zapisa
  obrisiJedanInvoice(id) {
    this.dataSource.data.find((data, index) => {
      if (data._id === id) {
        this.dataSource.data.splice(index, 1);
        return this.dataSource;
      }
    });

    // jedan zapis je obrisan radimo refresh tablice
    this.dataSource = new MatTableDataSource(this.dataSource.data);

    this.invoiceService.deleteInvoiceFetch(id).then((data) => {
      console.log('Zapis obrisan Fetch metodom.');
    });

    this.invoiceService.deleteInvoice(id).subscribe(
      (data) => {
        this.snackBar.open('Zapis obrisan.', 'Success', {
          duration: 2000,
          verticalPosition: this.verticalPosition,
        });
      },
      (err) => {
        this.errorHandler(
          err,
          'Neuspješno brisanje zapisa. (obrisan je vec fetch metodom)'
        );
      }
    );
  }

  editirajFormu(id) {
    console.log(id);
    this.router.navigate(['app-invoice', 'invoice', id]);
  }

  saveForm() {
    this.router.navigate(['app-invoice', 'new']);
  }

  filterTextZaSvaPolja(filterdata) {
    this.dataSource.filter = filterdata.toLowerCase().trim();
  }

  //  Error handler
  private errorHandler(err, message) {
    console.error(err);
    this.snackBar.open(message, 'Error', {
      duration: 2000,
      verticalPosition: this.verticalPosition,
    });
  }
}
