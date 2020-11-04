import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { Invoice } from '../../models/invoice';
import { ClientService } from '../../services/client.service';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css'],
})
export class InvoiceFormComponent implements OnInit, AfterViewInit {
  clients;
  podatak;
  title: string;
  private invoice: Invoice;
  invoiceForm: FormGroup;
  // Pozicija za snackBar
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private clientServices: ClientService,
    private snackBar: MatSnackBar,
    private router: Router,
    private aktivnaRouta: ActivatedRoute
  ) {}

  ngOnInit() {
    this.clientServices.getClients().subscribe((data) => {
      this.clients = data;
    });

    this.createForm();
    // definiram formu ako je EDIT/New
    this.setInvoiceForm();
  }

  createForm() {
    this.invoiceForm = this.fb.group({
      item: ['', Validators.required],
      date: ['', Validators.required],
      due: ['', Validators.required],
      qty: ['', Validators.required],
      rate: '',
      tax: '',
      invoiceclient: ['', Validators.required],
    });
  }

  //  NEW / EDIT FORM
  setInvoiceForm() {
    this.aktivnaRouta.params.subscribe((data) => {
      const id = data['id'];
      //  Nema id u route, znaci nova je zapis
      if (!id) {
        this.title = 'Nova forma';
        return;
      }
      this.title = 'Editirana forma';

      // Ovo je opsija SA!!! RESOLVEROM
      this.aktivnaRouta.data.subscribe((data: { invoice: Invoice }) => {
        this.invoice = data.invoice;

        if (this.invoice.invoiceclient) {
          this.invoiceForm.patchValue({
            invoiceclient: this.invoice.invoiceclient._id,
          });
        }

        this.invoiceForm.patchValue({
          item: this.invoice.item,
          qty: this.invoice.qty,
          date: this.invoice.date,
          due: this.invoice.due,
          rate: this.invoice.rate,
          tax: this.invoice.tax,
        });
        console.log('da vidimo', this.invoiceForm.value);
      });
    });
  }

  //  Kreiram invoice
  onSubmit() {
    //  Invoice ne postoji kreirati cemo novi
    if (!this.invoice) {
      console.log('Invoice ne postoji kreirati cemo novi.');
      this.invoiceService.createInvoice(this.invoiceForm.value).subscribe(
        (data) => {
          this.snackBar.open('Invoice created', 'Success', {
            duration: 5000,
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          console.log(data);
        },
        (err) => {
          this.errorHandler(err, 'Nisam uspio Kreirati podatak');
        }
      );
    } else {
      console.log('Invoice POSTOJI napraviti cemo update');
      this.invoiceService
        .updateInvoice(this.invoice._id, this.invoiceForm.value)
        .subscribe(
          (data) => {
            this.snackBar.open('Invoice UPDATE', 'Uspješno', {
              duration: 5000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
          },
          (err) => {
            this.errorHandler(err, 'Nisam uspio UPDATE invoice');
          }
        );
    }
    this.router.navigate(['app-invoice', 'invoice']);
  }

  //  Error handler
  private errorHandler(err, message) {
    console.error(err);
    this.snackBar.open(message, 'Error', {
      duration: 2000,
    });
  }

  // Odistajemo od snimanja
  odustaniOdSnimanja() {
    this.router.navigate(['app-invoice', 'invoice']);
  }

  ngAfterViewInit() {}
}
