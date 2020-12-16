import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersonajesNextComponent } from './lista-personajes-next.component';

describe('ListaPersonajesNextComponent', () => {
  let component: ListaPersonajesNextComponent;
  let fixture: ComponentFixture<ListaPersonajesNextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPersonajesNextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPersonajesNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
