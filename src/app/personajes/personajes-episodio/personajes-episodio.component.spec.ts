import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesEpisodioComponent } from './personajes-episodio.component';

describe('PersonajesEpisodioComponent', () => {
  let component: PersonajesEpisodioComponent;
  let fixture: ComponentFixture<PersonajesEpisodioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonajesEpisodioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesEpisodioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
