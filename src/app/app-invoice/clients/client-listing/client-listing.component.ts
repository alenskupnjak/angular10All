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

    this.clientServices.getClients().subscribe(
      (data) => {
        this.dataSource.data = data;
        this.spinnerLoad = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  filterTextZaSvaPolja(filterdata) {
    this.dataSource.filter = filterdata.toLowerCase().trim();
  }

  ngAfterViewInit() {
    // definiranje paginatora i sortiranja
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  noviKlijent(): void {
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

      this.clientServices.createClient(result).subscribe(
        (data) => {
          // Obavijest na ekranu
          this.snackBar.open('Klijent kreiran.', 'Success', {
            duration: 2000,
            verticalPosition: this.verticalPosition,
          });

          this.clientServices.getClients().subscribe(
            (data) => {
              this.dataSource.data = data;
            },
            (err) => {
              this.snackBar.open('Klijent nije dohvacen.', 'Fail!', {
                duration: 4000,
                verticalPosition: this.verticalPosition,
              });
            }
          );
        },
        (err) => {
          console.log(err);
        }
      );
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

      this.clientServices.updateClient(client._id, result).subscribe(
        (data) => {
          this.clientServices.getClients().subscribe(
            (data) => {
              this.dataSource.data = data;
            },
            (err) => {
              this.snackBar.open('Klijent nije osvježen.', 'Fail!', {
                duration: 4000,
                verticalPosition: this.verticalPosition,
              });
            }
          );
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  onDelete(element) {
    this.clientServices.deleteClient(element).subscribe(
      (e) => {
        this.clientServices.getClients().subscribe(
          (data) => {
            this.dataSource.data = data;
            this.snackBar.open('Klijent obrisan.', 'Success', {
              duration: 4000,
              verticalPosition: this.verticalPosition,
            });
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );

    // this.clientServices.deleteClientfetch(element).then((e) => {
    //   // Osvježi tablicu
    //   this.clientServices.fetchAllClientsAsync().then((data) => {
    //     console.log(data);
    //     this.dataSource.data = data;

    //     this.snackBar.open('Klijent obrisan.', 'Success', {
    //       duration: 4000,
    //       verticalPosition: this.verticalPosition,
    //     });
    //   });
    //   console.log(e);
    // });
  }

  //  Error handler
  private errorHandler(err, message) {
    console.error(err);
    this.snackBar.open(message, 'Error', {
      duration: 3000,
    });
  }
}
