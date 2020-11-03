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
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.css'],
})
export class InvoiceListingComponent implements OnInit, AfterViewInit {
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  poljezaBrisanje = [];
  duzinaZapisa;
  spinnerLoad: boolean = false;
  displayedColumns: string[] = [
    'item',
    'qty',
    'date',
    'due',
    'rate',
    'tax',
    'client',
    'action',
    'delete',
  ];
  // dataSource;
  constructor(
    public invoiceService: InvoiceService,
    private router: Router,
    private snackBar: MatSnackBar,
    private clientServices: ClientService
  ) {}

  // veza sa datatable, nužno
  dataSource = new MatTableDataSource<Invoice>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.spinnerLoad = true;

    this.invoiceService.getInvoices().subscribe((data) => {
      data = data.map((e) => {
        if (e.invoiceclient) {
          e.invoiceclient = e.invoiceclient.firstName;
        }
        return e;
      });

      this.spinnerLoad = false;
      this.duzinaZapisa = data.length;
      return (this.dataSource.data = data);
    }),
      (err) => {

        console.log('getInvoices()=',err);
      };
  }

  ngAfterViewInit() {
    // definiranje paginatora i sortiranja
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Brisanje jednog zapisa
  obrisiJedanInvoice(id) {
    this.invoiceService.deleteInvoice(id).subscribe(
      (data) => {
        this.dataSource.data.find((data, index) => {
          if (data._id === id) {
            this.dataSource.data.splice(index, 1);
            return this.dataSource;
          }
        });
        this.dataSource = new MatTableDataSource(this.dataSource.data);
        this.duzinaZapisa = this.dataSource.data.length;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (err) => {
        this.errorHandler(err, 'Invoice nije obrisan');
        console.log(err);
      }
    );

    this.snackBar.open('Zapis obrisan.', 'Success', {
      duration: 2000,
      verticalPosition: this.verticalPosition,
    });
  }

  editirajFormu(id) {
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

  obrisiVise() {
    this.poljezaBrisanje.forEach((id) => {
      this.obrisiJedanInvoice(id);
    });
    // jedan zapis je obrisan radimo refresh tablice
    this.poljezaBrisanje = [];
  }

  // selektiranje više polja za brisanje
  zaObrisati(id) {
    let index;
    index = this.poljezaBrisanje.indexOf(id);
    if (index < 0) {
      this.poljezaBrisanje.push(id);
    } else {
      this.poljezaBrisanje.splice(index, 1);
    }
  }
}
