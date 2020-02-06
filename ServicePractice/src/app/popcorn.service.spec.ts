import { TestBed } from '@angular/core/testing';

import { PopcornService } from './popcorn.service';

describe('PopcornService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopcornService = TestBed.get(PopcornService);
    expect(service).toBeTruthy();
  });
});
