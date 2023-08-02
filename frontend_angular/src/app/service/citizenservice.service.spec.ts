import { TestBed } from '@angular/core/testing';

import { CitizenserviceService } from './citizenservice.service';

describe('CitizenserviceService', () => {
  let service: CitizenserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitizenserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
