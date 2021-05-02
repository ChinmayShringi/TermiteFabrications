import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLegend = true;
  public barChartData = [
    {data: [this.randomInt(0,100),this.randomInt(0,100),this.randomInt(0,100),this.randomInt(0,100),this.randomInt(0,100),this.randomInt(0,100),this.randomInt(0,100),], label: 'Goods'},
    {data: [this.randomInt(0,100),this.randomInt(0,100),this.randomInt(0,100),this.randomInt(0,100),this.randomInt(0,100),this.randomInt(0,100),this.randomInt(0,100),], label: 'Workers'},
  ];
  randomInt(min:number, max:number) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  ngOnInit(): void {
  }

}
