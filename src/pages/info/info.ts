import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WhatcomPage} from '../whatcom/whatcom';
import {CombasicPage} from '../combasic/combasic';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }
  navigateToCombasic() {
    this.navCtrl.push(CombasicPage)
  }
  navigateToWhatcom() {
    this.navCtrl.push(WhatcomPage)
  }

}
