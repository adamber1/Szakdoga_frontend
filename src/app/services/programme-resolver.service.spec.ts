import { TestBed } from '@angular/core/testing';

import { ProgrammeResolverService } from './programme-resolver.service';

describe('ProgrammeResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgrammeResolverService = TestBed.get(ProgrammeResolverService);
    expect(service).toBeTruthy();
  });
});
