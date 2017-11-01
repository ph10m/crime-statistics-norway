import { Injectable } from '@angular/core';

import { Municipalicity } from './municipalicity';
import { MUNICS } from './mock-muni';

@Injectable()
export class MunicService {
  getMunics(): Promise<Municipalicity[]> {
    return Promise.resolve(MUNICS);
  }

  // See the "Take it slow" appendix not used?
  getMunicsSlowly(): Promise<Municipalicity[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getMunics()), 2000);
    });
  }
}