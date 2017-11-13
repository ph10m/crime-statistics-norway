import { Component, Input } from '@angular/core';
import { Municipality } from './municipality';

@Component({
  selector: 'munic-detail',
  template: `
    <div *ngIf="municipality">
      <h2>{{municipality.municipacility}}!</h2>
      <div>
        <label>Id: </label>{{municipality.id}}
      </div>
      <div>
        <label>Name: </label>{{municipality.municipacility}}
      </div>
      <div>
      </div>
    </div>
  `
})
export class MunicipalityDetailComponent {
  @Input() municipality: Municipality;
}