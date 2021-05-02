import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-build-home',
  templateUrl: './build-home.component.html',
  styleUrls: ['./build-home.component.css']
})
export class BuildHomeComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer) { }
  vLink:any=null;
  fLink:any;
  isShow:boolean=false
  onSubmit() {
    if(this.vLink!='' && this.vLink!=' ' && this.vLink!=undefined && this.vLink!=null){
     this.fLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.vLink);
     this.isShow=true
    }
  }

  ngOnInit(): void {
  }

}
