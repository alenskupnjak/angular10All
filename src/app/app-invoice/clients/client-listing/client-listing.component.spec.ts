import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../shared/material.module';

import { ClientListingComponent } from './client-listing.component';

describe('ClientListingComponent', () => {
  let component: ClientListingComponent;
  let fixture: ComponentFixture<ClientListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        MatDialogModule,
        // MatDialog,
        // MatDialogRef

      ],
      declarations: [ClientListingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
