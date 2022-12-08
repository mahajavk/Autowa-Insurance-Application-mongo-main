import { TestBed } from '@angular/core/testing';
import { QuoteApiService } from './Quote-api-service';

describe('ApiServiceService', () => {
  let service: QuoteApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoteApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
