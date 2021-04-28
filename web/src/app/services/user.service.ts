import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import auth from 'firebase/app';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
  }
  
  GoogleAuth() {
    return this.AuthLogin(new auth.auth.GoogleAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider:any) {
    return this.afAuth.signInWithPopup(provider)
    .then((result:any) => {
        console.log('You have been successfully logged in!',result)
    }).catch((error:any) => {
        console.log(error)
    })
  }

  createCoffeeOrder(data: any) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('coffeeOrders')
        .add(data)
        .then(
          (res) => {},
          (err) => reject(err)
        );
    });
  }

  updateCoffeeOrder(data: any) {
    return;
    this.firestore
      .collection('coffeeOrders')
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }
  getCoffeeOrders() {
    return;
    this.firestore.collection('coffeeOrders').snapshotChanges();
  }

  deleteCoffeeOrder(data: any) {
    return;
    this.firestore.collection('coffeeOrders').doc(data.payload.doc.id).delete();
  }
}
