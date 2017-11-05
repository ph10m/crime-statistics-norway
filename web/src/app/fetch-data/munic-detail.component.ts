import { Component, Input } from '@angular/core';
import { Municipality } from './municipality';

@Component({
  selector: 'munic-detail',
  template: `
    <div *ngIf="municipality">
      <h2>{{municipality.name}} details!</h2>
      <div>
        <label>id: </label>{{municipality.id}}
      </div>
      <div>
        <label>name: </label>{{municipality.name}}
      </div>
      <div>
        <span>{{municipality.all_abs}}</span> 
        <span>{{municipality.property_1000}} </span>
        <span>{{municipality.property_abs}}</span>
        <span>{{municipality.violence_1000}}</span>
        <span>{{municipality.violence_abs}}</span>
        <span>{{municipality.drugs_1000}} </span>
        <span>{{municipality.drugs_abs}}</span>
        <span>{{municipality.order_1000}}</span>
        <span>{{municipality.order_abs}}</span>
        <span>{{municipality.traffic_1000}} </span>
        <span>{{municipality.traffic_abs}}</span>
        <span>{{municipality.other_1000}} </span>
        <span>{{municipality.other_abs}}</span>
      </div>
    </div>
  `
})
export class MunicipalityDetailComponent {
  @Input() municipality: Municipality;
}