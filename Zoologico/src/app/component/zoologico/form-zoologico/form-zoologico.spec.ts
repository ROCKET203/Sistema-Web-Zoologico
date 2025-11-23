import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormZoologico } from './form-zoologico';

describe('FormZoologico', () => {
  let component: FormZoologico;
  let fixture: ComponentFixture<FormZoologico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormZoologico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormZoologico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
