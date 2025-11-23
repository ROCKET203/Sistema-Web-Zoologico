import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnimal } from './form-animal';

describe('FormAnimal', () => {
  let component: FormAnimal;
  let fixture: ComponentFixture<FormAnimal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAnimal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAnimal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
