import { Injectable } from '@angular/core';

import { Municipality } from './municipality';
import { MUNICS } from './mock-muni';

@Injectable()
export class MunicService {
  getMunics(): Promise<Municipality[]> {
    return Promise.resolve(MUNICS);
  }
}