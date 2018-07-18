import { TestBed, inject } from '@angular/core/testing';

import { MasterService } from './master.service';
import { DemoService } from './demo.service';


describe('Master service with angular support', () => {
  let masterService: MasterService;
  let demoServiceSpy: jasmine.SpyObj<DemoService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('DemoService', ['getValue']);
    TestBed.configureTestingModule({
      providers: [
        MasterService,
        { provide: DemoService, useValue: spy }
      ]
    });
    masterService = TestBed.get(MasterService);
    demoServiceSpy = TestBed.get(DemoService);
  });


  it('getValue should return stub value', () => {
    const stubValue = 'stub value';
    demoServiceSpy.getValue.and.returnValue(stubValue);
    expect(masterService.getValue()).toBe(stubValue);
    expect(demoServiceSpy.getValue.calls.count()).toBe(1, 'calls only once');
    expect(demoServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
  });

});
