import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore   ) { }
  createCoffeeOrder(data:any) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("coffeeOrders")
            .add(data)
            .then(res => {}, err => reject(err));
    });
  }

  updateCoffeeOrder(data:any) {
    return
        this.firestore
        .collection("coffeeOrders")
        .doc(data.payload.doc.id)
        .set({ completed: true }, { merge: true });
 }
 getCoffeeOrders() { 
  return 
   this.firestore.collection("coffeeOrders").snapshotChanges();
 }

 deleteCoffeeOrder(data:any) {
  return
      this.firestore
      .collection("coffeeOrders")
      .doc(data.payload.doc.id)
      .delete();
}

}
