import { TestBed } from '@angular/core/testing';

import { UserApiService } from './User-api-service';

describe('ApiServiceService', () => {
  let service: UserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
