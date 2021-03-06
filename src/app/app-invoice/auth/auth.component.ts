import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { JwtLocalStorageService } from '../services/jwt.localstorege.service';
import { environment } from '../../../environments/environment';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faTable,
  faSignOutAlt,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  googleSlika = '../../shared/img/google.png';
  URLBackend = environment.URL_ANGULAR10ALLBACKEND;
  authForm: FormGroup;
  subdestroyLogin: Subscription;
  subdestroySignup: Subscription;
  isResultsLoading = false; // SPPINER
  // tempPass = 112233;
  // tempUsername = 't@t.com';
  // Inicijalno je title prazan
  title = '';
  user;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private jwtService: JwtLocalStorageService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // this.tempPass = 112233;
    // this.tempUsername = 't@t.com';
    //  definiraj formu
    this.authForm = this.fb.group({
      email: ['t@t.com', Validators.required],
      password: ['112233', Validators.required],
    });

    // Definiram dale se logiram ili Kreiram klijenta
    if (this.router.url === '/app-invoice/login') {
      this.title = 'Login';
    } else {
      this.title = 'Signup';
    }
  }

  onSubmit() {
    this.isResultsLoading = true; // SPPINER
    // SIGNUP SIGNUP SIGNUP SIGNUP
    if (this.title === 'Signup') {
      this.subdestroySignup = this.authService
        .signup(this.authForm.value)
        .subscribe(
          (data) => {
            // Javljam poruku da je korisik kreiran
            this.snackBar.open('Korisnik kreiran', 'Success', {
              duration: 3000,
            });

            // preusmjeravam nakon kreiranja klijenta na login
            this.router.navigate(['app-invoice', 'invoice']);
          },
          (err) => {
            this.errorHandler(err, 'Opps, something went wrong');
            this.isResultsLoading = false;
          }
        );
    } else {
      // LOGIN LOGIN LOGIN LOGIN LOGIN
      this.subdestroyLogin = this.authService
        .login(this.authForm.value)
        .subscribe(
          (data) => {
            console.log('LOGin', data);
            this.snackBar.open('Korisnik se je ulogirao.', 'Success', {
              duration: 3000,
            });
            this.jwtService.seToken(data.token);
            this.router.navigate(['app-invoice', 'invoice']);
          },
          (err) => this.errorHandler(err, 'Opps, something went wrong'),
          () => (this.isResultsLoading = false)
        );
    }
  }

  googleAuthHandler() {
    this.authService.googleAuth().subscribe(
      (data) => {
        console.log(data);
      },
      (err) => this.errorHandler(err, 'Opps, something went wrong')
    );
  }

  // Javljanje greške na ekranu
  private errorHandler(error, message) {
    this.isResultsLoading = false;
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration: 2000,
    });
  }

  // krastavac kokos

  // zaboravio sam password
  forgotPassHandler(){
    this.router.navigate(['app-invoice','forgot-password']);
  }


  login() {
    console.log('login');

  }

  loginGitHUB() {
    // console.log();
    console.log('github',`${this.URLBackend}/appinvoice/auth/github`);

    window.location.href= `${this.URLBackend}/appinvoice/auth/github`;
  }

  faceBook() {
    console.log( 'faceBook');
  }

  ngOnDestroy() {
    // this.subdestroyLogin.unsubscribe();
    // this.subdestroySignup.unsubscribe();
  }
}
