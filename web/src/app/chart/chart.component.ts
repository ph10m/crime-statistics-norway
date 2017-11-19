import { Component, Input } from '@angular/core';

@Component({
 selector: 'ChartComponent',
 templateUrl: './chart.component.html'
})
export class ChartComponent {
 // Doughnut. standard default values

  @Input()
  ChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

  @Input()
  ChartData:number[] = [350, 450, 100];

  @Input()
  ChartType:string = 'doughnut';
}