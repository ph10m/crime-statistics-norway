import { Component, Input } from '@angular/core';
import { Municipalicity } from './municipalicity';

@Component({
  selector: 'munic-detail',
  template: `
    <div *ngIf="municipalicity">
      <h2>{{municipalicity.name}} details!</h2>
      <div>
        <label>id: </label>{{municipalicity.id}}
      </div>
      <div>
        <label>name: </label>{{municipalicity.name}}
      </div>
    </div>
  `
})
export class MunicipalicityDetailComponent {
  @Input() municipalicity: Municipalicity;
}