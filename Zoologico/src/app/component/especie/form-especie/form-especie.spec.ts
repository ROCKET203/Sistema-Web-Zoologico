import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEspecie } from './form-especie';

describe('FormEspecie', () => {
  let component: FormEspecie;
  let fixture: ComponentFixture<FormEspecie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEspecie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEspecie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
