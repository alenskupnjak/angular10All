import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokusniComponent } from './pokusni.component';

describe('PokusniComponent', () => {
  let component: PokusniComponent;
  let fixture: ComponentFixture<PokusniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokusniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokusniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
