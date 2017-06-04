import { Injectable } from '@angular/core';

import { Zero }       from './zero';
import { ZEROES }     from './mock-zeroes';

@Injectable()
export class ZeroService {

  getZero(id: number): Promise<Zero> {
    return this.getZeroes().then(
      zeroes => zeroes.find(zero => zero.id === id)
    );
  }
  
  getZeroes(): Promise<Zero[]> {
    return Promise.resolve(ZEROES);
  }
  
  getZeroesSlowly(): Promise<Zero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getZeroes()), 3000);
    });
  }
  
}