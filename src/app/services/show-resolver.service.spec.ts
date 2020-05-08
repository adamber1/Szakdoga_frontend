import { TestBed } from '@angular/core/testing';

import { ShowResolverService } from './show-resolver.service';

describe('ShowResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowResolverService = TestBed.get(ShowResolverService);
    expect(service).toBeTruthy();
  });
});
