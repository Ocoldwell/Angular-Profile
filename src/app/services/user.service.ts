import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user= {
    email: 'ocoldwell@nology.io',
    displayName: '',
    password: 'password123'
  }
  constructor(private afAuth: AngularFireAuth) {

   }
login () {
  const provider = new firebase.auth.GoogleAuthProvider;
  this.afAuth.signInWithPopup(provider).then( user => {
    console.log(user);
    this.user.displayName = user.user.displayName;
  })
}
}
