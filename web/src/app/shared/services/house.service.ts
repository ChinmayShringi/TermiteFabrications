import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { House } from './house';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  isSignedOut:boolean=true;
  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public router: Router,
    public ngZone: NgZone 
  ) {}

  submitHouse(userId:String,homeUrl:String) {
    this.afs.doc('house/' + this.getID()).set({
      uid:userId,
      homeUrl:homeUrl,
      isConfirmed:false,
      isApproved:false,
      materialId:'',
      workerId:''
    }).then((val)=>{
      return val;
    });
  }
  getAllHouse = new Promise<House[]>((res,rej)=>{
    try {
      let data=<House[]>[];
    this.afs.collection('house').get().subscribe((val)=>{
      val.forEach(doc=>{
        data.push(doc.data() as House);
      })
      res(data);
    })
   } catch(e){
     rej(e)
   }
   });

  getID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  }; 
}
