import { TestBed } from '@angular/core/testing';

import { XinServiceService } from './xin-service.service';

describe('XinServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XinServiceService = TestBed.get(XinServiceService);
    expect(service).toBeTruthy();
  });
});
