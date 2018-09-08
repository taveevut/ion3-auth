import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  email: string = "";
  password: string = "";
  name: string = "";
  data: Observable<any>;
  notic: string = "";
  error: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient) {

  }

  signup() {
    let frmData = new FormData();
    frmData.append('email', this.email);
    frmData.append('password', this.password);
    frmData.append('name', this.name);

    this.data = this.http.post('http://localhost/ionic_api/api_signup.php', frmData);
    this.data.subscribe(resp => {
      this.notic = resp.message;
    }, error => this.error = error);
  }

}
