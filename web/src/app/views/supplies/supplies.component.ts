import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Material } from 'src/app/shared/services/material';
import { SupplierService } from 'src/app/shared/services/supplier.service';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {
  constructor(
    public supplierService:SupplierService,
    public confirmationService:ConfirmationService
  ) { }

  display:boolean=false;
  displayMat:boolean=false;
  materials:Material[]
  showErr=false
  material:Material={
    name:'',
    price:0,
    stock:0,
    desc:'',
  }

  showDialog(){
    this.display=true
  }
  showDialogMat(mat:Material){
    this.material=mat
    this.displayMat=true
  }
  confirm(event: Event,mat:any) {
    this.confirmationService.confirm({
        target: event.target || undefined,
        message: 'Are you sure that you want to Delete?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.delMat(mat)
        },
        reject: () => {
            //reject action
        }
    });
}
UpdateMat(){

}

  delMat(mid:any){
    this.supplierService.delMats(mid).then((val)=>{
      this.loadMats()
    });
  }
  ngOnInit(): void {
    this.loadMats()
  }

  async loadMats(){
    this.supplierService.getMats.then((val)=>{
      this.materials=val
    })
  }
  resetMat(){
    this.material={
      name:'',
      price:0,
      stock:0,
      desc:'',
    } 
  }
  submitMaterial(){
    if(this.material.name!='' && this.material.desc!='' && this.material.price!=0 && this.material.stock!=0){
      this.display=false
      this.showErr=false
      this.supplierService.newMaterial(this.material)
      this.resetMat()
    }else 
      this.showErr=true;
  }
  updateMat(){
    if(this.material.name!='' && this.material.desc!='' && this.material.price!=0 && this.material.stock!=0){
      this.displayMat=false
      this.showErr=false
      this.supplierService.updateMat(this.material)
      this.resetMat()
    }else 
      this.showErr=true;
  }

}
