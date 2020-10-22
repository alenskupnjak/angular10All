import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css'],
})
export class InvoiceFormComponent implements OnInit, AfterViewInit {
  invoiceForm: FormGroup;
  // Pozicija za snackBar
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private fb: FormBuilder,
    private invoiceService: InvoiceService,
    private snackBar: MatSnackBar,
    private router: Router
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
    this.setInvoiceForm();
  }

  setInvoiceForm() {
    // this.jednaRouta.params.subscribe((data) => {
    //   const id = data["id"];
    //   if (!id) {
    //     return;
    //   }
    //   this.invoiceService.editInvoice(id).subscribe(
    //     (sviPodaciForme) => {
    //       this.invoice = sviPodaciForme;
    //       this.invoiceForm.patchValue(this.invoice);
    //     },
    //     (err) => this.errorHandler(err, "Nisam nasao zapis")
    //   );
    // });
  }

  //  Kreiram invoice
  onSubmit() {
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
