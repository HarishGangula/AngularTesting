import { TestBed, inject } from '@angular/core/testing';

import { DemoService } from './demo.service';

// describe('DemoService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [DemoService]
//     });
//   });

//   it('should be created', inject([DemoService], (service: DemoService) => {
//     expect(service).toBeTruthy();
//   }));
// });

describe('DemoService', () => {
  let service: DemoService;
  beforeEach(() => {
    service = new DemoService();
  });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('#getValue should return real value observable', (done) => {
    service.getObservableValue().subscribe(value => {
      expect(value).toBe('real value');
      done();
    });
  });

  it('#getValue should return real value promise', (done) => {
    service.getPromiseValue().then(value => {
      expect(value).toBe('real value');
      done();
    });
  });

});
