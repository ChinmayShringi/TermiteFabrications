import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { HouseService } from './house.service';
import { Material } from './material';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(
    private firestore: AngularFirestore,
    public afs: AngularFirestore, 
    public router: Router,
    public userService:UserService
  ) { }

  newMaterial(mat:Material) {
    mat.uid=this.userService.getUID()
    mat.mid=this.getID()
    this.afs.doc('materials/' + mat.mid).set(mat);
  }

  getMats = new Promise<Material[]>((res,rej)=>{
    try {
    let data=<Material[]>[];
    this.afs.collection('materials').get().subscribe((val)=>{
      val.forEach(doc=>{
        data.push(doc.data() as Material);
      })
      res(data);
    })
   } catch(e){
     rej(e)
   }
   });

   delMats(mid:String){ 
    return new Promise<boolean>((res,rej)=>{
   try {
     this.afs.collection("materials").doc(mid as string).delete().then(() => {
       res(true)
       return true;
   }).catch((error) => {
       console.error("Error removing document: ", error);
       rej(false)
       return false;
   });
  } catch(e){
    console.log(e);
    rej(false)
  }
  });
 }

 updateMat(mat:Material){ 
   mat.uid=this.userService.getUID()
  return new Promise<boolean>((res,rej)=>{
 try {
   this.afs.collection("materials").doc(mat.mid as string).update(mat).then((val) => {
     console.log(val);
     res(true)
 }).catch((error) => {
     console.error("Error removing document: ", error);
     rej(false)
 });
} catch(e){
  console.log(e);
  rej(false)
}
});
}

   
  getID = function () {
    return '_' + Math.random().toString(36).substr(2, 12);
  }; 
}
