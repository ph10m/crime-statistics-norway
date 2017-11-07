import { Injectable } from '@angular/core';

import { Region } from './region';
import { REGIONS } from './mock-regions';

@Injectable()
export class RegionService {
  getRegions(): Promise<Region[]> {
    return Promise.resolve(REGIONS);
  }
}


