import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTraslado } from './form-traslado';

describe('FormTraslado', () => {
  let component: FormTraslado;
  let fixture: ComponentFixture<FormTraslado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTraslado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTraslado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
