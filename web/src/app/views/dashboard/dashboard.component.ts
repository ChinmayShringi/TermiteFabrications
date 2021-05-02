import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public authService: UserService,) { }
    userT=["Customer","Suplier","Architect"];
    ind:number=this.authService.userData.utype!
    userTp=this.userT[this.ind-1];
  ngOnInit(): void {
  }

}
