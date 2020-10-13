import { TestBed } from '@angular/core/testing';

import { ProfiledataService } from './profiledata.service';

describe('ProfiledataService', () => {
  let service: ProfiledataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfiledataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
