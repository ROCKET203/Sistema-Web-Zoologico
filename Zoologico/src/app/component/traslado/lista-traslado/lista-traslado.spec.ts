import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTraslado } from './lista-traslado';

describe('ListaTraslado', () => {
  let component: ListaTraslado;
  let fixture: ComponentFixture<ListaTraslado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTraslado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTraslado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
