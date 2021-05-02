import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public afs: AngularFirestore, // Inject Firestore service
    public router: Router,
    public ngZone: NgZone 
  ) {
   }

  addItem = new Promise<User[]>((res,rej)=>{
     try {
       let data=<User[]>[];
     this.afs.collection('users').get().subscribe((val)=>{
       val.forEach(doc=>{
         data.push(doc.data() as User);
       })
       res(data);
     })
    } catch(e){
      rej(e)
    }
    });
}
