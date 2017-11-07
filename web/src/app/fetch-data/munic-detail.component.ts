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
        <div> 
        <label>Absolutte tall: </label>{{municipality.all_abs}}
        </div> 
        <div>
        <label>Property 1000: </label>{{municipality.property_1000}} 
        </div>
        <div> 
        <label>name: </label>{{municipality.property_abs}}
        </div>
        <div>
        <label>name: </label>{{municipality.violence_1000}}
        </div>
        <div>
        <label>name: </label>{{municipality.violence_abs}}
        </div>
        <div>
        <label>name: </label>{{municipality.drugs_1000}}
         </div>
        <div>
        <label>name: </label>{{municipality.drugs_abs}}
        </div>
        <div>
        <label>name: </label>{{municipality.order_1000}}
        </div>
        <div>
        <label>name: </label>{{municipality.order_abs}}
        </div>
        <div>
        <label>name: </label>{{municipality.traffic_1000}} 
        </div>
        <div>
        <label>name: </label>{{municipality.traffic_abs}}
        </div>
        <div>
        <label>name: </label>{{municipality.other_1000}} 
        </div>
        <div>
        <label>name: </label>{{municipality.other_abs}}
        </div>
      </div>
    </div>
  `
})
export class MunicipalityDetailComponent {
  @Input() municipality: Municipality;
}