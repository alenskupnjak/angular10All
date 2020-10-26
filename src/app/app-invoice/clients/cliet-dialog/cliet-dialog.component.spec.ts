import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClietDialogComponent } from './cliet-dialog.component';

describe('ClietDialogComponent', () => {
  let component: ClietDialogComponent;
  let fixture: ComponentFixture<ClietDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClietDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClietDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
