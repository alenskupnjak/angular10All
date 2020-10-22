import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-client-listing',
  templateUrl: './client-listing.component.html',
  styleUrls: ['./client-listing.component.css'],
})
export class ClientListingComponent implements OnInit,AfterViewInit {
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  spinnerLoad: boolean = false;
  displayedColumns: string[] = ['firstName', 'lastName', 'email','action'];
  constructor(
    private clientServices: ClientService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}
  // veza sa datatable, nužno
  dataSource = new MatTableDataSource<Client>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.clientServices.fetchAllClientsAsync().then((data) => {
      console.log(data);
      this.dataSource.data = data;
    });
  }



  ngAfterViewInit() {
    // definiranje paginatora i sortiranja
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
