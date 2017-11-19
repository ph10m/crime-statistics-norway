import { Component, Input } from '@angular/core';

@Component({
 selector: 'BarChartComponent',
 templateUrl: './barchart.component.html'
})
export class BarChartComponent {
    barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
 };

 //default values from example, gets overridden when the element is created

    @Input()
    BarChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

    @Input()
    BarChartType:string = 'bar';

    @Input()
    BarChartLegend:boolean = true;

    @Input()
    BarChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];

 }