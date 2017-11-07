import { Component, Input } from '@angular/core';
import { Municipality } from './municipality';

@Component({
  selector: 'munic-detail',
  template: `
    <div *ngIf="municipality">
      <h2>{{municipality[1]}}!</h2>
      <div>
        <label>id: </label>{{municipality[0]}}
      </div>
      <div>
        <label>name: </label>{{municipality[1]}}
      </div>
      <div>
        <div> 
        <label>Absolutte tall: </label>{{municipality[2]}}
        </div> 
        <div>
        <label>Property 1000: </label>{{municipality[3]}} 
        </div>
        <div> 
        <label>name: </label>{{municipality[4]}}
        </div>
        <div>
        <label>name: </label>{{municipality[5]}}
        </div>
        <div>
        <label>name: </label>{{municipality[6]}}
        </div>
        <div>
        <label>name: </label>{{municipality[7]}}
         </div>
        <div>
        <label>name: </label>{{municipality[8]}}
        </div>
        <div>
        <label>name: </label>{{municipality[9]}}
        </div>
        <div>
        <label>name: </label>{{municipality[10]}}
        </div>
        <div>
        <label>name: </label>{{municipality[11]}} 
        </div>
        <div>
        <label>name: </label>{{municipality[12]}}
        </div>
        <div>
        <label>name: </label>{{municipality[13]}} 
        </div>
        <div>
        <label>name: </label>{{municipality[14]}}
        </div>
      </div>
    </div>
  `
})
export class MunicipalityDetailComponent {
  @Input() municipality: Municipality;
}