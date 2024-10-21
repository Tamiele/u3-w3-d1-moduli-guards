import { TestBed } from '@angular/core/testing';

import { AccessoGuard } from './accesso.guard';

describe('AccessoGuard', () => {
  let guard: AccessoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccessoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
