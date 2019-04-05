import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {InfoPage} from '../info/info';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  navigateToInfo() {
    this.navCtrl.push(InfoPage)
  }
  navigateToAbout() {
    this.navCtrl.push(AboutPage)
  }
  navigateToContact() {
    this.navCtrl.push(ContactPage)
  }
  navigateToHome() {
    this.navCtrl.push(HomePage)
  }
}
