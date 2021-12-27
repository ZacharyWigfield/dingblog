import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password).then((userCredential) => {
        this.user = userCredential
        console.log(this.user)
        this.router.navigate(['/write']);
      
      // console.log('signing in')
      // this.user = await this.afAuth.currentUser
      // console.log(this.user?.email)
    })
    .catch((error) => {
      console.log(error)
    });
  }

  printUser(){
    console.log(this.user)
  }
}
