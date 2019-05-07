import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { FirebaseAuth } from 'angularfire2';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user : Observable<firebase.User>
  constructor(private FirebaseAuth : AngularFireAuth) { 
    this.user = FirebaseAuth.authState;
  }

  signup(email: string, password: string){
    this.FirebaseAuth.auth.createUserWithEmailAndPassword(email, password).then( value => {
        console.log('Success', value);
    }).catch(err => {
      console.log("Something went wrong!", err);
    });
  }

  login(email: string, password: string){
        this.FirebaseAuth.auth.signInWithEmailAndPassword(email, password).then(value => {
          console.log('login is working...!', value);
        }).catch(err => {
          console.log('something went wrong', err);
        });
  }

  logout(){
    this.FirebaseAuth.auth.signOut();
  }
}
