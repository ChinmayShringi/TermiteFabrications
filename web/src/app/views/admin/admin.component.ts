import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import { User } from 'src/app/shared/services/user';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users:User[]
  constructor(private adminService:AdminService,public userService:UserService) { }
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
    this.loadData();
  }
  async loadData(){
    this.adminService.addItem.then((val)=>{
      this.users=val;
    })
  }

}
