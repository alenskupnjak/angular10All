import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/shared/material.module';

import { TecajComponent } from './tecaj.component';

describe('TecajComponent', () => {
  let component: TecajComponent;
  let fixture: ComponentFixture<TecajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        HttpClientModule,
        // BrowserAnimationsModule,
      ],
      declarations: [TecajComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
