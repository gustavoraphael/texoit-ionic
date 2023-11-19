import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';
import { HttpClientModule } from '@angular/common/http';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HelperService]
    });
    service = TestBed.inject(HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
