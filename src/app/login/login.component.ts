import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userEmail = '';
  userPassword = '';

  constructor() { }

  ngOnInit(): void {
  }

  onKey(type: string, value: string){
    if (type == 'email') {
      this.userEmail = value
    } else {
      this.userPassword = value
    }
  }

}
