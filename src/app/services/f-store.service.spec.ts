import { TestBed } from '@angular/core/testing';

import { FStoreService } from './f-store.service';

describe('FStoreService', () => {
  let service: FStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
