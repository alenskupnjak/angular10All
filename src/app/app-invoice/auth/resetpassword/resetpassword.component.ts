import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css'],
})
export class ResetpasswordComponent implements OnInit {
  form: FormGroup;
  isResultsLoading = false;
  private token = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
    this.token = this.route.snapshot.params['token'];
    console.log(this.token);
  }
  onSubmit() {
    let { password, confirmPassword } = this.form.value;
    if (password !== confirmPassword) {
      this.snackBar.open('Both password should match', 'warning', {
        duration: 3000,
      });
      return;
    }

    this.isResultsLoading = true;
    this.authService.resetPassword({ token: this.token, password }).subscribe(
      (data) => {
        this.snackBar.open('Password updated successfully', 'Success', {
          duration: 3000,
        });
        this.router.navigate(['app-invoice', 'login']);
      },
      (err) => this.errorHandler(err, 'Nešto nije u redu sa reset passwordom'),
      () => (this.isResultsLoading = false)
    );
  }

  // Inicijalizacija forme
  private initForm() {
    this.form = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  private errorHandler(error, message) {
    this.isResultsLoading = false;
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration: 2000,
    });
  }
}
