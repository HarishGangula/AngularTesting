import { TestBed, inject } from '@angular/core/testing';

import { DemoService } from './demo.service';

describe('Demo service with TestBed', () => {
  let demoService: DemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoService]
    });
    demoService = TestBed.get(DemoService);
  });

  it('should return real value', () => {
    expect(demoService.getValue()).toBe('real value');
  });
});
