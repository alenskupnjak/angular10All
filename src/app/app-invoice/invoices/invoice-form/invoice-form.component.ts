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
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css'],
})
export class InvoiceFormComponent implements OnInit, AfterViewInit {
  private invoice: Invoice;
  invoiceForm: FormGroup;
  // Pozicija za snackBar
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private snackBar: MatSnackBar,
    private router: Router,
    private aktivnaRouta: ActivatedRoute
  ) {}

  createForm() {
    this.invoiceForm = this.fb.group({
      item: ['', Validators.required],
      date: ['', Validators.required],
      due: ['', Validators.required],
      qty: ['', Validators.required],
      rate: '',
      tax: '',
    });
  }

  ngOnInit() {
    this.createForm();
    // definiram formu ako je EDIT/New
    this.setInvoiceForm();
  }

  //  NEW / EDIT FORM
  setInvoiceForm() {
    this.aktivnaRouta.params.subscribe((data) => {
      const id = data['id'];
      //  Nema id u route, znaci nova je zapis
      if (!id) {
        return;
      }
      this.invoiceService.getInvoice(id).subscribe(
        (sviPodaciForme) => {
          console.log(sviPodaciForme);
          this.invoice = sviPodaciForme;
          this.invoiceForm.patchValue(this.invoice);
        },
        (err) => this.errorHandler(err, 'Nisam nasao zapis')
      );
    });
  }

  //  Kreiram invoice
  onSubmit() {
    //  Invoice ne postoji kreirati cemo novi
    if (!this.invoice) {
      this.invoiceService.createInvoice(this.invoiceForm.value).subscribe(
        (data) => {
          this.snackBar.open('Invoice created', 'Success', {
            duration: 2000,
            horizontalPosition: this.horizontalPosition,
          });
          console.log(data);
        },
        (err) => {
          this.errorHandler(err, 'Nisam uspio Kreirati podatak');
        }
      );

      setTimeout(() => {
        console.log(this.invoiceForm.value);

        this.invoiceService
          .createfetchInvoice(this.invoiceForm.value)
          .then((data) => {
            this.snackBar.open('Invoice kreiran', 'Uspješno', {
              duration: 2000,
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
            });
            this.router.navigate(['app-invoice', 'invoice']);
            console.log(data);
          })
          .catch((err) => {
            this.errorHandler(err, 'Nisam uspio kreirati podatak sa fetch');
          });
      }, 2200);
    } else {
      console.log('update');
      // EDITIRAMO
      this.invoiceService
        .updateInvoice(this.invoice._id, this.invoiceForm.value)
        .subscribe(
          (data) => {
            console.log(data);
          },
          (err) => {
            this.errorHandler(err, 'Nisam uspio UPDATE invoice');
          }
        );

      this.invoiceForm.value.tax = this.invoiceForm.value.tax + 1000;
      // Fetch verzija
      this.invoiceService
        .updateInvoiceFetch(this.invoice._id, this.invoiceForm.value)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          this.errorHandler(err, 'Nisam uspio UPDATE invoice');
        });
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

  ngAfterViewInit() {}
}
