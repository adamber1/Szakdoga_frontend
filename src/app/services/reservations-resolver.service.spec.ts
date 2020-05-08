import { TestBed } from '@angular/core/testing';

import { ReservationsResolverService } from './reservations-resolver.service';

describe('ReservationsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReservationsResolverService = TestBed.get(ReservationsResolverService);
    expect(service).toBeTruthy();
  });
});
