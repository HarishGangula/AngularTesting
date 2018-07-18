import { MasterService } from './master.service';

describe('Master service without before each', () => {


  function setup() {
    const demoServiceSpy = jasmine.createSpyObj('DemoService', ['getValue']);
    const masterService = new MasterService(demoServiceSpy);
    const stubValue = 'stub value';
    return {demoServiceSpy, stubValue, masterService};
  }

  it('getValue should return stub value without beforeeach', () => {
    const {demoServiceSpy, stubValue, masterService} = setup();
    demoServiceSpy.getValue.and.returnValue(stubValue);
    expect(masterService.getValue()).toBe(stubValue);
    expect(demoServiceSpy.getValue.calls.count()).toBe(1, 'calls only once');
    expect(demoServiceSpy.getValue.calls.mostRecent().returnValue).toBe(stubValue);
  });

});
