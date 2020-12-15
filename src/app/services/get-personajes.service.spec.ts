import { TestBed } from '@angular/core/testing';

import { GetPersonajesService } from './get-personajes.service';

describe('GetPersonajesService', () => {
  let service: GetPersonajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPersonajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
