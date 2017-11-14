import { Component, Input } from '@angular/core';
import { Municipality } from './municipality';

@Component({
  selector: 'munic-detail',
  template: `
    <div *ngIf="municipality">
      <h2>{{municipality[1]}}!</h2>
      <div>
        <label>Id: </label>{{municipality[0]}}
      </div>
      <div>
        <label>Name: </label>{{municipality[1]}}
      </div>
      <div>
        <div> 
        <label>Total crimes: </label>{{municipality[2]}}
        </div> 
        <div>
        <label>Total per 1000: </label>{{municipality[3]}} 
        </div>
        <div> 
        <label>Property total: </label>{{municipality[4]}}
        </div>
        <div>
        <label>Property per 1000: </label>{{municipality[5]}}
        </div>
        <div>
        <label>Violence total: </label>{{municipality[6]}}
        </div>
        <div>
        <label>Violence per 1000: </label>{{municipality[7]}}
         </div>
        <div>
        <label>Drugs total: </label>{{municipality[8]}}
        </div>
        <div>
        <label>Drugs per 1000: </label>{{municipality[9]}}
        </div>
        <div>
        <label>Order total: </label>{{municipality[10]}}
        </div>
        <div>
        <label>Order per 1000: </label>{{municipality[11]}} 
        </div>
        <div>
        <label>Traffic total: </label>{{municipality[12]}}
        </div>
        <div>
        <label>Traffic per 1000: </label>{{municipality[13]}} 
        </div>
        <div>
        <label>Other total: </label>{{municipality[14]}}
        </div>
        <div>
        <label>Other per 1000: </label>{{municipality[15]}}
        </div>
      </div>
    </div>
  `
})
export class MunicipalityDetailComponent {
  @Input() municipality: Municipality;
}