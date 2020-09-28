import { TestBed } from '@angular/core/testing';

import { LegoAngularService } from './lego-angular.service';

describe('LegoAngularService', () => {
  let service: LegoAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegoAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
