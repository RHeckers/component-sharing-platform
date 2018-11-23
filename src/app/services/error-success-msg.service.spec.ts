import { TestBed } from '@angular/core/testing';

import { ErrorSuccessMsgService } from './error-success-msg.service';

describe('ErrorSuccessMsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorSuccessMsgService = TestBed.get(ErrorSuccessMsgService);
    expect(service).toBeTruthy();
  });
});
