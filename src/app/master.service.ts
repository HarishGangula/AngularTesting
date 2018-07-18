import { Injectable } from '@angular/core';
import { DemoService } from './demo.service';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(public demoService: DemoService) { }
  getValue() {
    return this.demoService.getValue();
  }
}
