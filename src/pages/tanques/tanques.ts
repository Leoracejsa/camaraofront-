import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TanquesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tanques',
  templateUrl: 'tanques.html',
})
export class TanquesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TanquesPage');
  }
  irHome(tanque){
    console.log('tanque',tanque)
    this.navCtrl.push('HomePage',{title:tanque})
  }

}
