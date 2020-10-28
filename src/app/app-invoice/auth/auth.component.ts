import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { JwtService } from '../services/jwt.localstorege.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  isResultsLoading = false; // SPPINER
  // Inicijalno je title prazan
  title = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private jwtService: JwtService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    //  definiraj formu
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    // Definiram dale se logiram ili Kreiram klijenta
    if (this.router.url === '/app-invoice/login') {
      this.title = 'Login';
    } else {
      this.title = 'Signup';
    }
  }

  onSubmit() {
    // if title === Signup
    // we need to send the request for Signup
    if (this.title === 'Signup') {
      this.isResultsLoading = true; // SPPINER
      this.authService.signup(this.authForm.value).subscribe(
        (data) => {
          console.log(data);
          this.snackBar.open('Korisnik kreiran', 'Success', {
            duration: 3000,
          });
          this.router.navigate(['/app-invoice', 'login']);
        },
        (err) => {
          this.errorHandler(err, 'Opps, something went wrong');
          this.isResultsLoading = false;
        }
      );
    } else {
      // LOGIN LOGIN LOGIN LOGIN LOGIN
      this.isResultsLoading = true; // SPPINER
      this.authService.login(this.authForm.value).subscribe(
        (data) => {
          console.log('LOGin', data);
          this.snackBar.open('Korisnik se je ulogirao.', 'Success', {
            duration: 3000,
          });
          this.jwtService.seToken(data.token);
          this.router.navigate(['/app-invoice']);
        },
        (err) => this.errorHandler(err, 'Opps, something went wrong'),
        () => (this.isResultsLoading = false)
      );
    }
  }

  // Javljanje greške na ekranu
  private errorHandler(error, message) {
    this.isResultsLoading = false;
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration: 2000,
    });
  }
}
