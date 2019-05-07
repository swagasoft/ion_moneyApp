import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';


interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
user: User = {
  email : 'swagasoft@gmail.com',
  password : '123456',
};

  constructor(public authservice: AngularFireAuth ) { }

    async createAccount() {
    const current_user =   await this.authservice.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password,
      );
    console.log(current_user);
    }

    async login() {
      await this.authservice.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
        
      );
    }

    async logout() {
      await this.authservice.auth.signOut();
    }

  ngOnInit() {
  }

}
