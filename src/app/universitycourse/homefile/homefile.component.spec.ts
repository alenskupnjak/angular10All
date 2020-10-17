import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomefileComponent } from './homefile.component';

describe('HomefileComponent', () => {
  let component: HomefileComponent;
  let fixture: ComponentFixture<HomefileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomefileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
