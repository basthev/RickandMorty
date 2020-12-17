import { TestBed } from '@angular/core/testing';

import { NextPageService } from './next-page.service';

describe('NextPageService', () => {
  let service: NextPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NextPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
