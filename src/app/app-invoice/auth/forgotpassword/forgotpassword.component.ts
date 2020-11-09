import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent implements OnInit {
  formforgot: FormGroup;
  isResultsLoading = false;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.formforgot = this.fb.group({
      email: ['q@q.com', Validators.required],
    });
  }


  onSubmit() {
    this.isResultsLoading = true;
    console.log('this.formforgot.value=', this.formforgot.value);

    this.authService.forgotPassword(this.formforgot.value).subscribe(
      (data) => {
         console.log(data);
        this.snackBar.open(data.message, 'Success', {
          duration: 5000,
        });
      },
      (err) => {
        this.errorHandler(err, 'Something went wrong');
      },
      () => (this.isResultsLoading = false)
    );
  }

  // Ako ima grešku javlja grešku
  private errorHandler(error, message) {
    this.isResultsLoading = false;
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration: 2000,
    });
  }
}
