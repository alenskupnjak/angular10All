import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatSnackBar,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';
import { ClietDialogComponent } from '../../clients/cliet-dialog/cliet-dialog.component';

@Component({
  selector: 'app-client-listing',
  templateUrl: './client-listing.component.html',
  styleUrls: ['./client-listing.component.css'],
})
export class ClientListingComponent implements OnInit, AfterViewInit {
  firstName;

  verticalPosition: MatSnackBarVerticalPosition = 'top';
  spinnerLoad: boolean = false;
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'actions'];
  constructor(
    private clientServices: ClientService,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  // veza sa datatable, nužno
  dataSource = new MatTableDataSource<Client>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {

    this.spinnerLoad = true;
    this.clientServices.fetchAllClientsAsync().then((data) => {
      this.dataSource.data = data;
      this.spinnerLoad = false;
    });
  }

  filterTextZaSvaPolja(filterdata) {
    this.dataSource.filter = filterdata.toLowerCase().trim();
  }

  ngAfterViewInit() {
    // definiranje paginatora i sortiranja
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ClietDialogComponent, {
      width: '400px',
      height: '350px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      //  odustali smo od kreiranja klijenta izlazimo iz dialoga
      if (!result) {
        return;
      }

      console.log('The dialog was closed');
      // kreiranje klijenta
      this.clientServices
        .createfetchClient(result)
        .then((data) => {
          // ako se vrati podatak da client nije kreiran baca grešku
          if (data.error) {
            throw new Error('Neuspleja kreiranje klijenta');
          }
          // Obavijest na ekranu
          this.snackBar.open('Klijent kreiran.', 'Success', {
            duration: 2000,
            verticalPosition: this.verticalPosition,
          });

          // Osvježi tablicu
          this.clientServices.fetchAllClientsAsync().then((data) => {
            console.log(data);
            this.dataSource.data = data;
          });
        })
        .catch((err) => {
          console.log(err);
          // Obavijest na ekranu
          this.snackBar.open('Klijent nije kreiran.', 'Fail!', {
            duration: 4000,
            verticalPosition: this.verticalPosition,
          });
        });
    });
  }

  // Editiranje klijenta
  onEdit(client) {
    const dialogRef = this.dialog.open(ClietDialogComponent, {
      width: '400px',
      height: '350px',
      data: {
        firstName: client.firstName,
        lastName: client.lastName,
        email: client.email,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      //  odustali smo od kreiranja klijenta izlazimo iz dialoga
      if (!result) {
        return;
      }

      this.clientServices.updateClient(client._id, result).then((e) => {
        // Osvježi tablicu
        this.clientServices
          .fetchAllClientsAsync()
          .then((data) => {
            this.dataSource.data = data;
            // Obavijest na ekranu
            this.snackBar.open('Klijent osvježen.', 'Success', {
              duration: 3000,
              verticalPosition: this.verticalPosition,
            });
          })
          .catch((err) => {
            this.errorHandler(err, 'Neuspješno osvježen zapis.');
          });
      });
    });
  }

  onDelete(element) {
    this.clientServices.deleteClient(element).then((e) => {
      // Osvježi tablicu
      this.clientServices.fetchAllClientsAsync().then((data) => {
        console.log(data);
        this.dataSource.data = data;

        this.snackBar.open('Klijent obrisan.', 'Success', {
          duration: 4000,
          verticalPosition: this.verticalPosition,
        });
      });
      console.log(e);
    });
    console.log(element);
  }

  //  Error handler
  private errorHandler(err, message) {
    console.error(err);
    this.snackBar.open(message, 'Error', {
      duration: 3000,
    });
  }
}
