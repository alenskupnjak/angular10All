import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecajComponent } from './tecaj.component';

describe('TecajComponent', () => {
  let component: TecajComponent;
  let fixture: ComponentFixture<TecajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecajComponent ]
    })
    .compileComponents();
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
