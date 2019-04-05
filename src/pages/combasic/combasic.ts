import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FreshyPage } from '../freshy/freshy';
import { JuniorPage } from '../junior/junior';
import { SeniorPage } from '../senior/senior';
import { SophomorePage } from '../sophomore/sophomore';

/**
 * Generated class for the CombasicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-combasic',
  templateUrl: 'combasic.html',
})
export class CombasicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CombasicPage');
  }
  navigateToFreshy() {
    this.navCtrl.push(FreshyPage)
  }
  navigateToJunior() {
    this.navCtrl.push(JuniorPage)
  }
  navigateToSenior() {
    this.navCtrl.push(SeniorPage)
  }
  navigateToSophomore() {
    this.navCtrl.push(SophomorePage)
  }

}
