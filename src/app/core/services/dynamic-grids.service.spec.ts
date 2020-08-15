import { TestBed } from '@angular/core/testing';

import { DynamicGridsService } from './dynamic-grids.service';

describe('DynamicGridsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicGridsService = TestBed.get(DynamicGridsService);
    expect(service).toBeTruthy();
  });
});
