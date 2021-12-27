import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userEmail = '';
  userPassword = '';

  currentUser = this.afAuth.currentUser

  constructor(
    public authService: AuthService,
    public afAuth: AngularFireAuth
    ) { }

  ngOnInit(): void {
  }

  onKey(type: string, value: string) {
    if (type == 'email') {
      this.userEmail = value
    } else {
      this.userPassword = value
    }
  }

  onClick() {
    this.authService.printUser()
  }

}
