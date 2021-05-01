import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
declare var $:any;
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(public authService: UserService,public router:Router) { }
  ngOnInit(): void {
  }
  authCalled(){
    var working = false;
    if (working) return;
  working = true;
  var $this = document.querySelector('form.login'),
    $state = document.querySelector('span.state');
  $this!.classList.add('loading');
  $state!.innerHTML='Authenticating';
    this.authService.GoogleAuth().then((val)=>{
      $this!.classList.add('ok');
      $state!.innerHTML='Welcome back!';
      this.router.navigate(['/dashboard']);
    })
  }

  ngAfterViewInit(): void {
  
  }

}
