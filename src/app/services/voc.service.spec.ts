import { TestBed } from '@angular/core/testing';

import { VocService } from './voc.service';

describe('VocService', () => {
  let service: VocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
