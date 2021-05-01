import { Injectable, NgZone } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import auth from 'firebase/app';
import { User } from '../shared/services/user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  userData: any;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    public afs: AngularFirestore, // Inject Firestore service
    public router: Router,
    public ngZone: NgZone //
  ) {
    this.afAuth.authState.subscribe((user) => {
      console.log(user);
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', '');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  // Sign in with email/password
  SignIn(email: any, password: any) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['/home']);
        });
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Sign up with email/password
  SignUp(email: any, password: any) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: any) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    try{
      console.log(JSON.parse(localStorage.getItem('user')!));
      const user = JSON.parse(localStorage.getItem('user')!);
    return user !== ' ' && user.emailVerified !== false ? true : false;
    } catch(e){
      return false;
    }
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new auth.auth.GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) {
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
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['/user']);
    });
  }
}
