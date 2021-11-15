import { TestBed } from '@angular/core/testing';

import { APIBookService } from './api-book.service';

describe('GoogleBooksApiReqService', () => {
  let service: APIBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
