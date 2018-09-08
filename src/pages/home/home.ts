import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email: string;
  password: string;
  error: string = "";
  notic: string = "";
  data: Observable<any>;

  constructor(public navCtrl: NavController,
    public http: HttpClient) {

  }

  login() {
    let frmData = new FormData();
    frmData.append('email', this.email);
    frmData.append('password', this.password);

    this.data = this.http.post('http://localhost/ionic_api/api_signin.php', frmData);
    this.data.subscribe(resp => {
      this.notic = resp.message;
    }, error => this.error = error);
  }

  gotoSignup() {
    this.navCtrl.push(SignupPage);
  }

}
