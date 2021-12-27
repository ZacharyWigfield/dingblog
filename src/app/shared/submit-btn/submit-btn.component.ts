import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-submit-btn',
  templateUrl: './submit-btn.component.html',
  styleUrls: ['./submit-btn.component.scss']
})
export class SubmitBtnComponent implements OnInit {
  @Input() email = '';
  @Input() password = '';

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  ngOnChanges() {

  }

  async onSubmit(){
    console.log(this.email + ' ' + this.password);

    try {
      await this.afAuth.signInWithEmailAndPassword(this.email, this.password)
    }
    catch (err) {
      console.log(err);
    }
  }

}
