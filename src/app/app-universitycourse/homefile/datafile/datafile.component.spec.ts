import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/shared/material.module';

import { DatafileComponent } from './datafile.component';

describe('DatafileComponent', () => {
  let component: DatafileComponent;
  let fixture: ComponentFixture<DatafileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterTestingModule,
      ],
      declarations: [ DatafileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatafileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should createe', () => {
    expect(component).toBeTruthy();
  });
});
