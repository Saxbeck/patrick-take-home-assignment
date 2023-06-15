import { TestBed } from '@angular/core/testing';

import { MockquestionService } from './mockquestion.service';

describe('MockquestionService', () => {
  let service: MockquestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockquestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
