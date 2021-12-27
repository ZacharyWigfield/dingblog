import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service'

@Component({
  selector: 'app-submit-btn',
  templateUrl: './submit-btn.component.html',
  styleUrls: ['./submit-btn.component.scss']
})
export class SubmitBtnComponent implements OnInit {
  @Input() email = '';
  @Input() password = '';

  constructor(
    private afAuth: AngularFireAuth,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {

  }

  async onSubmit() {
    this.authService.login(this.email, this.password)
    
  }

}
