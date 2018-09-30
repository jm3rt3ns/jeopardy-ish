import { TestBed } from '@angular/core/testing';

import { JeopardyService } from './jeopardy.service';

describe('JeopardyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JeopardyService = TestBed.get(JeopardyService);
    expect(service).toBeTruthy();
  });
});
