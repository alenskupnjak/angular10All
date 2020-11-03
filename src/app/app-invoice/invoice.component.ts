import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-app-invoice',
  templateUrl: './app-invoice.component.html',
  styleUrls: ['./app-invoice.component.css'],
})
export class InvoiceComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }
}
