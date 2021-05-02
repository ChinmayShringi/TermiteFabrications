import { Injectable, NgZone } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import auth from 'firebase/app';
import { User } from './user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData: User={};
  isSignedOut:boolean=true;
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public afs: AngularFirestore, // Inject Firestore service
    public router: Router,
    public ngZone: NgZone //
  ) {}
  userType:number=0;

  // Returns true when user is looged in 
  get isLoggedIn(): boolean {
    try{
      const user = JSON.parse(localStorage.getItem('user')!);
      this.userData=user;
    return user !== ' ' && user !== '' && user!=null? true : false;
    } catch(e){
      return false;
    }
  }

  setLocal(user:User){
    if(this.isSignedOut){
      localStorage.removeItem('user');
    }else if (user) {
      this.userData=user;
      localStorage.setItem('user', JSON.stringify(this.userData));
      JSON.parse(localStorage.getItem('user')!);
    } else {
      localStorage.removeItem('user');
    }
  }

  // Sign in with Google
  GoogleAuth(uType:number) {
    return this.AuthLogin(new auth.auth.GoogleAuthProvider(),uType);
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any,uType:number) {
    this.isSignedOut=false;
    this.userType=uType;
    return this.afAuth
      .signInWithPopup(provider)
      .then((result: any) => {
        this.SetUserData(result.user);
        this.ngZone.run(() => {
          this.router.navigate(['/dashboard']);
        });
      })
      .catch((error: any) => {
        window.alert(error);
      });
  }

  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      utype:this.userType,
      emailVerified: user.emailVerified,
    };
    this.setLocal(userData);
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign out
  SignOut() {
    this.isSignedOut=true;
    this.userData={};
    this.userType=-1;
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }
}
