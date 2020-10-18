import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecajListaComponent } from './tecaj-lista.component';

describe('TecajListaComponent', () => {
  let component: TecajListaComponent;
  let fixture: ComponentFixture<TecajListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecajListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecajListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
