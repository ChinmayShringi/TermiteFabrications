import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(public authService: UserService) { }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }

}
