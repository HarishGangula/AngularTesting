import { Injectable } from '@angular/core';
import { Observable, of } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  getValue(): string {
    return 'real value';
  }

  getObservableValue(): any {
   return of('real value');
  }

  getPromiseValue(): any {
    return new Promise((resolve, reject) => {
      resolve('real value');
    });
  }

}
