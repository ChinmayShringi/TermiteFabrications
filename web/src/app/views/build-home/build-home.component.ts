import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/shared/services/house.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-build-home',
  templateUrl: './build-home.component.html',
  styleUrls: ['./build-home.component.css']
})
export class BuildHomeComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer,
    private userService:UserService,
    private houseService:HouseService,
    private router:Router
    ) { }
  vLink:any='';
  fLink:any='';
  isShow:boolean=false
  onSubmit() {
    if(this.vLink!='' && this.vLink!=' ' && this.vLink!=undefined && this.vLink!=null){
     this.fLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.vLink);
     this.isShow=true
    }
  }
  submitDesign(){
    this.houseService.submitHouse(this.userService.getUID()!,this.vLink)
    this.router.navigate(['/houseBill']);
  }

  ngOnInit(): void {
  }

}
