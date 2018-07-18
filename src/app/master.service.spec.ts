import { TestBed, inject } from '@angular/core/testing';

import { MasterService } from './master.service';
import { DemoService } from './demo.service';

// describe('MasterService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [MasterService]
//     });
//   });

//   it('should be created', inject([MasterService], (service: MasterService) => {
//     expect(service).toBeTruthy();
//   }));
// });


describe('Master service without angular support', () => {
  let masterService: MasterService;

  it('should return real value', () => {
    masterService = new MasterService(new DemoService());
    expect(masterService.getValue()).toBe('real value');
  });

  it('should return fake real value', () => {
    masterService = new MasterService(new DemoService());
    expect(masterService.getValue()).toBe('real value');
  });

  it('should return fake real value', () => {
    const fake = { getValue: () => 'fake value'};
    masterService = new MasterService(fake as DemoService);
    expect(masterService.getValue()).toBe('fake value');
  });

  it('getvalue from stub service', () => {
    const demoServiceSpy = jasmine.createSpyObj('DemoService', ['getValue']);
    const stubValue = 'stub value';
    demoServiceSpy.getValue.and.returnValue(stubValue);

    masterService = new MasterService(demoServiceSpy);

      expect(masterService.getValue()).toBe(stubValue, 'service returned stub value');
      expect(demoServiceSpy.getValue.calls.count()).toBe(1);
      expect(demoServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
  });

});
