import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTecajDialogComponent } from './course-tecaj-dialog.component';

describe('CourseTecajDialogComponent', () => {
  let component: CourseTecajDialogComponent;
  let fixture: ComponentFixture<CourseTecajDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseTecajDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTecajDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
